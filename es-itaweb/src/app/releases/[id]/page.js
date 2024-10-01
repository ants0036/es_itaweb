import { createClient } from '../../../supabase/server'
import Header from '@/app/homepage/header';
import IdolCounter from './idol_counter.js'
import MainImage from './main-image.js'
import DropdownNEXT from "./dropdown_nextUI.js"

export default async function ReleasePage({params}) {
    const supabase = createClient();
    const { data: releaseData, error : releaseError} = await supabase.from('Releases').select().eq('id', params.id).single();
    const { data: mergeData, error : mergeError} = await supabase.from('idol-release merge').select().eq('r_id', params.id);

    // i've changed the name grabbing for each individual cell but i feel like this is not very optimal in the long run since it's one call for each cell. 
    // MOVE THE BIG LAMBDA INTO ITS OWN FUNCTION?

    const {data:{user}} = await supabase.auth.getUser();

    var idol_names = mergeData.map(async (val, key) => {
        const { data: idolData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single()
        return ({
            key: String(idolData.f_name),
            label: String(idolData.f_name)
        })
    })

    var arrayOfValues = await Promise.all(idol_names)
    

    /*const i_dropitems =  idol_names.map ((val, key) => {
        return ({
        key,
        label: val
    })
    })*/

    //<DropdownNEXT i_dropitems = {i_dropitems}/>
    return (
        <div> 
            <Header/> 
            <div className=" grid-cols-2 flex justify-center">
            <div className="pr-5"> <MainImage release_name = {releaseData.name}/> </div>
            <div>
                <p className="text-2xl font-semibold">{releaseData.name}</p>
                <p className="text-xs"> {releaseData.original_name}</p>
                <br/>
                <p>Release date: {releaseData.release_date}</p>
                <p>Individual price: {releaseData.price_indiv}</p>
                <p>Box price: {releaseData.price_box}</p>
                <p>Origin Country: {releaseData.origin}</p>
                <p>Dimensions: {releaseData.dimensions}</p>
                <DropdownNEXT i_dropitems = {arrayOfValues}/>
                
            </div>
            </div>
            <div className="pt-5 flex flex-wrap justify-center"> 
            
            </div>
            <hr/>
        </div>
    )
  }

/*{mergeData.map(async (val, key) => {
                    // fetching the idol for each individual release
                    const { data: idolData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
        
                    //CHANGE LATER: spaghetti repeated code.
                    if (val.variant == null) {
                        const { data: countData, error: countError } = await supabase.from('user_data').select('qty').eq('r_id', val.r_id).eq('i_id', val.i_id).eq('user_id', user.id).single();
                        return (
                            <div className="p-3" key = {key}>
                            {idolData.f_name}
                            <IdolCounter i_id = {val.i_id} r_id = {releaseData.id} variant = {releaseData.variant} count = {countData}/>
                        </div>
                        )
                    } else {
                        const { data: countData, error: countError } = await supabase.from('user_data').select().eq('r_id', val.r_id).eq('i_id', val.i_id).is('variant', val.variant).eq('user_id', user.id);

                        return (
                            <div className="p-3" key = {key}>
                                {JSON.stringify(countData)} 
                            {idolData.f_name} {val.variant}
                            <IdolCounter i_id = {val.i_id} r_id = {releaseData.id} variant = {releaseData.variant} count = {countData}/>
                        </div>
                        )
                    }})}*/