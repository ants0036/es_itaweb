import { createClient } from '../../supabase/server.ts'
import ReleaseListing from './release-listing.js'
import PageTurner from './page-turner.js'

// shouldn't be using the service key but it's okay for now :sob:

export default async function ReleaseTable({searchParams}) {
    const supabase = createClient();
    var releases; 

    var category = searchParams["category"] ?? ''
    var releaseName = searchParams["name"] ?? ''
    var page = searchParams["page"] ?? 0 
    
    // querying releases based off of searchParams
    if (category != '' && releaseName != '')  {
        var { data: releases } = await supabase.from('Releases').select().eq("category", category).ilike("name", releaseName).range(parseInt(page)*25, (parseInt(page) + 1) * 25 - 1);
    } else if (releaseName != '' && category == '') {
        var { data: releases } = await supabase.from('Releases').select().ilike("name", releaseName).range(parseInt(page)*25, (parseInt(page) + 1) * 25 - 1);
    } else if (releaseName == '' && category != '') {
        var { data: releases } = await supabase.from('Releases').select().eq("category", category).range(parseInt(page)*25, (parseInt(page) + 1) * 25 - 1);
    } else {
        var { data: releases } = await supabase.from('Releases').select().range(parseInt(page)*25, (parseInt(page) + 1) * 25 - 1);
    }

    return (
        <div>
            <div className="pt-5 flex flex-wrap justify-items center">
                    {releases.map((val, key) => {return (
                        <div className="p-3" key = {key}>
                            < ReleaseListing val = {val}  key = {key}/> 
                        </div>)})}
            </div>
            <PageTurner className = "py-5"/>
        </div>
    )
}