import { createClient } from '../../../../utils/supabase/server'
import Header from '@/app/header/header';
import IdolCounter from './idol_counter.js'

export default async function ReleasePage({params}) {
    const supabase = createClient();
    const { data: releaseData, error : releaseError} = await supabase.from('Releases').select().eq('id', params.id).single();
    const { data: mergeData, error : mergeError} = await supabase.from('idol-release merge').select().eq('r_id', params.id);
    
    // there's probably a better way to do this. filters the idols in the current release and then grabs their names. 
    const idolIDs = [];
    mergeData.map((val) => {idolIDs.push(val.i_id)})
    const { data: idolData, error: idolError } = await supabase.from('Idols').select().in('id', idolIDs)
    
    // dynamic page for each individual release. 
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
                {idolData.map((val, key) => {
                        return (<td key = {key} className = "idol_table">
                            {val.f_name} 
                            <IdolCounter i_id = {val.id} r_id = {releaseData.id} />
                        </td>)})}
            </tr> </tbody></table>
            <hr/>
            <p>debug. please ignore </p>
            {JSON.stringify(releaseData)} 
            {JSON.stringify(idolData)} 
            {JSON.stringify(mergeData)} 
        </div>
    )
  }