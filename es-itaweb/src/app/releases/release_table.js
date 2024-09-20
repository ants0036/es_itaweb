import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabaseUrl = 'https://bdpsygjpfsoaxgcowdbs.supabase.co'
const supabaseKey = process.env.SERVICE_KEY
// shouldn't be using the service key but it's okay for now :sob:

export default async function ReleaseTable() {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: releases } = await supabase.from('Releases').select();

    return (
            <table className="">
                <tbody>
                <tr>
                    <th>Release Date</th>
                    <th>Name</th>
                </tr>
                {releases.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.release_date}</td>
                            <Link href={`/releases/${encodeURIComponent(val.id)}`}> {val.name} </Link>
                            <td>{val.original_name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}