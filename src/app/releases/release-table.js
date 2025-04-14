import { createClient } from '@/supabase/server.ts';
import ReleaseListing from './release-listing.js'
import PageTurner from './page-turner.js'

// shouldn't be using the service key but it's okay for now 

export default async function ReleaseTable({searchParams}) {
    const supabase = createClient();
    var releases; 

    var category = searchParams["category"] ?? ''
    var releaseName = searchParams["name"] ?? ''

    // to calculate pages 
    var page = parseInt(searchParams["page"] ?? 0) 
    var currentPage = page * 25
    var nextPage = (page + 1) * 25 - 1
    
    // querying releases based off of searchParams
    try {
        if (category != '' && releaseName != '')  {
            var { data: releases } = await supabase.from('Releases').select().eq("category", category).ilike("name", releaseName).range(currentPage, nextPage)
        } else if (releaseName != '' && category == '') {
            var { data: releases } = await supabase.from('Releases').select().ilike("name", releaseName).range(currentPage, nextPage) 
        } else if (releaseName == '' && category != '') {
            var { data: releases } = await supabase.from('Releases').select().eq("category", category).range(currentPage, nextPage) 
        } else {
            var { data: releases } = await supabase.from('Releases').select().range(currentPage, nextPage) 
        }
    
        return (
            <div className>
                <div className=" flex flex-wrap justify-items center">
                        {releases.map((val, key) => {return (
                            <div className="px-3 pb-3" key = {key}>
                                < ReleaseListing val = {val}  key = {key}/> 
                            </div>)})}
                </div>
                <PageTurner className = "py-5"/>
            </div>
        )
    } catch {
        return (
            <div className>
               Error fetching database data.
            </div>
        ) 
    }
}