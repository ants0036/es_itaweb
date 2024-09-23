import { createClient } from '../../supabase/server'

//change spaghetti variable names 
async function totalSpent(money) {
    var totalspent = 0; 
    for (let i = 0; i < money.length; i++) {
        const price = await money[i]
        if (price == null) {
            continue;
        }
        else {
            totalspent = totalspent + parseInt(price, 10)
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

    let totalspent = totalSpent(money);
    var totalspentUSD = await totalspent / 144
    var totalspentCAD = await totalspent / 106

    return (
        <div className="columns-2 w-full p-5 bg-blue-900 text-white flex justify-center">
            <div className = "pr-3">
            <p> You have spent <p className="text-xl"> {totalspent} ¥</p>   on enstars merch!! and probably more because of shipping! congrats!!! </p>
            </div>
            <div>
            <p> With the current conversion rate of 144 yen = 1 USD, you have spent </p> <p className="text-xl"> {Math.round(100 * totalspentUSD) /100} USD </p>
            <p> With the current conversion rate of 106 yen = 1 CAD, you have spent </p> <p className="text-xl"> {Math.round(100 * totalspentCAD) /100} CAD</p> 
            </div>

        </div>
    )
}