import { createClient } from '../../../../utils/supabase/server'
import Header from '@/app/header/header';
import IdolCounter from './idol_counter.js'

export default async function ReleasePage({params}) {
    const supabase = createClient();
    const { data: releaseData, error : releaseError} = await supabase.from('Releases').select().eq('id', params.id).single();
    const { data: mergeData, error : mergeError} = await supabase.from('idol-release merge').select().eq('r_id', params.id);

    // i've changed the name grabbing for each individual cell but i feel like this is not very optimal in the long run since it's one call for each cell. 
    // MOVE THE BIG LAMBDA INTO ITS OWN FUNCTION

    return (
        <div> 
            <Header/> 
            <h2>{releaseData.name}</h2>
            <p>officially known as: {releaseData.original_name}</p>
            <p>Release date: {releaseData.release_date}</p>
            <p>Individual price: {releaseData.price_indiv}</p>
            <p>Box price: {releaseData.price_box}</p>
            <p>Origin Country: {releaseData.origin}</p>
            <p>Dimensions: {releaseData.dimensions}</p>
            <table className = "idol_table"> <tbody><tr>
                {mergeData.map(async (val, key) => {
                    const { data: idolData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                        return (<td key = {key} className = "idol_table">
                            {idolData.f_name} {val.variant}
                            <IdolCounter i_id = {val.i_id} r_id = {releaseData.id} />
                        </td>)})}
            </tr> </tbody></table>
            <hr/>
            <p>debug. please ignore </p>
            {JSON.stringify(releaseData)} 
            {JSON.stringify(mergeData)} 
        </div>
    )
  }