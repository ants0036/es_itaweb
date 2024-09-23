import { createClient } from '@supabase/supabase-js'
import HomeImage from './home-image.js'
import Link from 'next/link'

const supabaseUrl = 'https://bdpsygjpfsoaxgcowdbs.supabase.co'
const supabaseKey = process.env.SERVICE_KEY
// shouldn't be using the service key but it's okay for now :sob:

export default async function ReleaseTable() {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: releases } = await supabase.from('Releases').select();

    return (
        <div className="pt-5 flex flex-wrap justify-items center">
                {releases.map((val, key) => {
                    return (
                        <div className="p-3" key = {key}>
                         <a href={`/releases/${encodeURIComponent(val.id)}`}> <HomeImage release_name = {val.name}/> </a> 
                        <p className="text-xs"> {val.release_date} </p>
                            <Link className = "text-sky-600 font-semibold" href={`/releases/${encodeURIComponent(val.id)}`}> {val.name} </Link>
                        </div>
                    )
                })}
        </div>
    )
}