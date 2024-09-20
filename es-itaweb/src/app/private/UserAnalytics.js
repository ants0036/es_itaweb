import { createClient } from '../../../utils/supabase/server'

//change spaghetti variable names 
async function addMoney(money) {
    var totalspent = 0; 
    for (let i = 0; i < money.length; i++) {
        const money2 = await money[i]
        if (money2 == null) {
            continue;
        }
        else {
            totalspent = totalspent + parseInt(money2, 10)
        }
    }
    return totalspent;
}

export default async function UserAnalytics() {
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();
    const {data: userData, error: inventoryError} = await supabase.from('user_data').select().eq('user_id', user.id);

    // convert user data to array of yen spent 
    let money = userData.map(async (val, key) => {
        const {data: rData, error: rDataError} = await supabase.from('Releases').select().eq('id', val.r_id).single();
        if (rData.price_indiv == null) {
            return; 
        }
        else { return (+rData.price_indiv * +val.qty); }
    })

    let totalspent = addMoney(money);
    var totalspentUSD = await totalspent / 144
    var totalspentCAD = await totalspent / 106

    return (
        <div className ="p-5">
            <p> you have spent {totalspent} yen on enstars merch!! and probably more because of shipping! congrats!!! </p>
            <p> with the current conversion rate of 144 yen = 1 USD, you have spent {totalspentUSD} USD </p>
            <p> with the current conversion rate of 106 yen = 1 USD, you have spent {totalspentCAD} CAD </p>
        </div>
    )
}