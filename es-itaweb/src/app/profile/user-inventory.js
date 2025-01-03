import { createClient } from '../../supabase/server'
import ReleaseListing from '../releases/release-listing';
import SearchComponent from '../search/search-component';

// needs to be overhauled to be the same release table except with a release table 
export default async function UserInventory({searchParams}) {
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();

    // spaghetti copy paste from the release table. abstract out later 
    
    var category = searchParams["category"]
    var releaseName = searchParams["name"]

    var page = searchParams["page"]
    if (page == null) {
        page = 0;
    }
    
    // querying releases based off of searchParams
    if (category != null && releaseName != null)  {
        var { data: releases } = await supabase.from('Releases').select().eq("category", category).ilike("name", releaseName);
    } else if (releaseName != null && category == null) {
        var { data: releases } = await supabase.from('Releases').select().ilike("name", releaseName);
    } else if (releaseName == null && category != null) {
        var { data: releases } = await supabase.from('Releases').select().eq("category", category);
    } else {
        var { data: releases } = await supabase.from('Releases').select();
    }

    var releaseIDs = releases.map ((val, key) => {
        return val.id
    })

    // querying user data 
    const {data: inventoryData, error: inventoryError} = (await supabase.from('user_data').select().in('r_id', releaseIDs).eq('user_id', user.id).range(parseInt(page)*25, (parseInt(page) + 1) * 25 - 1))
    
    return (
        <div>
        <div className ="flex justify-center pt-5">
            <p className = "text-xl "> Inventory </p>
        </div>
        <SearchComponent params = {"profile"}/>
        <div className="pt-5 flex flex-wrap justify-items center">
                    {inventoryData.map(async (val, key) => {
                        const {data: rData, error: rDataError} = await supabase.from('Releases').select().eq('id', val.r_id).single();
                        const { data: iData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                        return (
                            <div className="p-3" key = {key}>
                                <ReleaseListing val = {rData} key = {key}/>
                                <p> {iData.f_name} {val.variant}   {val.qty}</p>
                            </div>
                        )
                    })}
        </div>
        </div>
    )
}