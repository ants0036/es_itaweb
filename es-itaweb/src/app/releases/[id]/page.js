import { createClient } from '../../../../utils/supabase/server'
import Header from '@/app/header/header';
import IdolCounter from './idol_counter.js'
import MainImage from './MainImage.js'

export default async function ReleasePage({params}) {
    const supabase = createClient();
    const { data: releaseData, error : releaseError} = await supabase.from('Releases').select().eq('id', params.id).single();
    const { data: mergeData, error : mergeError} = await supabase.from('idol-release merge').select().eq('r_id', params.id);

    // i've changed the name grabbing for each individual cell but i feel like this is not very optimal in the long run since it's one call for each cell. 
    // MOVE THE BIG LAMBDA INTO ITS OWN FUNCTION?

    const {data: { user }} = await supabase.auth.getUser();

    return (
        <div> 
            <Header/> 
            <h2>{releaseData.name}</h2>
            <p>officially known as: {releaseData.original_name}</p>
            <MainImage release_name = {releaseData.name}/>
            <p>Release date: {releaseData.release_date}</p>
            <p>Individual price: {releaseData.price_indiv}</p>
            <p>Box price: {releaseData.price_box}</p>
            <p>Origin Country: {releaseData.origin}</p>
            <p>Dimensions: {releaseData.dimensions}</p>
            <table className = "idol_table"> <tbody><tr>
                {mergeData.map(async (val, key) => {
                    // fetching the idol for each individual release
                    const { data: idolData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                    
                    //CHANGE LATER: spaghetti repeated code.
                    if (val.variant == null) {
                        const { data: countData, error: countError } = await supabase.from('user_data').select('qty').eq('r_id', val.r_id).eq('i_id', val.i_id).eq('user_id', user.id).single();
                        return (
                            <div>
                            <td key = {key} className = "idol_table">
                            {idolData.f_name} {val.variant}
                            <IdolCounter i_id = {val.i_id} r_id = {releaseData.id} variant = {releaseData.variant} count = {countData}/>
                        </td>
                        </div>
                        )
                    } else {
                        const { data: countData, error: countError } = await supabase.from('user_data').select().eq('r_id', val.r_id).eq('i_id', val.i_id).is('variant', val.variant).eq('user_id', user.id);

                        return (
                            <div>
                                {JSON.stringify(countData)} 
                            <td key = {key} className = "idol_table">
                            {idolData.f_name} {val.variant}
                            <IdolCounter i_id = {val.i_id} r_id = {releaseData.id} variant = {releaseData.variant} count = {countData}/>
                        </td>
                        </div>
                        )
                    }

                    // fetching the previous # of each release for the user 
                    const { data: countData, error: countError } = await supabase.from('user_data').select().eq('r_id', val.r_id).eq('i_id', val.i_id).is('variant', val.variant).eq('user_id', user.id);

                    // passes data to a client-side component that is mutable. 
                        return (
                            <div>
                    {JSON.stringify(countData)} 
                    {JSON.stringify(countError)} 
                    {JSON.stringify(val.r_id)} 
                    {JSON.stringify(val.i_id)} 
                    {JSON.stringify(val.variant)} 
                    {JSON.stringify(user.id)} 
                        <td key = {key} className = "idol_table">
                            {idolData.f_name} {val.variant}
                            <IdolCounter i_id = {val.i_id} r_id = {releaseData.id} variant = {releaseData.variant} count = {countData}/>
                        </td>
                        </div>
                        )})}
            </tr> </tbody></table>
            <hr/>
            <p>debug. please ignore. release data query:</p>
            {JSON.stringify(releaseData)} 
            <p>merge data query:</p>
            {JSON.stringify(mergeData)} 
            <p>user data query:</p>
            {JSON.stringify(user)} 
        </div>
    )
  }