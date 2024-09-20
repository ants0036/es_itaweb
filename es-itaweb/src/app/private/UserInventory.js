import { createClient } from '../../../utils/supabase/server'
import HomeImage from '../releases/HomeImage';

export default async function UserInventory() {
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();
    const {data: inventoryData, error: inventoryError} = await supabase.from('user_data').select().eq('user_id', user.id);
    return (
        <div className="pt-5 flex flex-wrap justify-items center">
                    {inventoryData.map(async (val, key) => {
                        const {data: rData, error: rDataError} = await supabase.from('Releases').select().eq('id', val.r_id).single();
                        const { data: iData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                        return (
                            <div className="p-3" key = {key}>
                                <HomeImage release_name = {rData.name}/>
                                <p>{rData.name} </p>
                                   <p> {iData.f_name}{val.variant}   {val.qty}</p>
                            </div>
                        )
                    })}
            <p> please ignore this is for debug too </p>
            {JSON.stringify(inventoryData)} 
        </div>
    )
}