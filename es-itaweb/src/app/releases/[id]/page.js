import { createClient } from '../../../supabase/server'
import Header from '@/app/homepage/header';
import MainImage from './main-image.js'
import IdolNameButton from './idolname-button.js'
import Incrementer from './incrementer'
import Footer from '@/app/homepage/footer';

async function IncrementerImplementation({ params, searchParams }) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (searchParams.i_id != null) {
        // fetch the user's data of the current idol.
        const { data: countData, error: countError } = await supabase.from('user_data').select('qty').eq('r_id', params.id).eq('i_id', searchParams.i_id).eq('user_id', user.id).single();
        // fetch the selected idol's information.
        const { data: selectedIdolData, error: idolError } = await supabase.from('Idols').select().eq('id', searchParams.i_id).single();

        // case where there is no user data on the selected idol
        if (countData == null) {
            return (
                <div>
                    <p> You have selected {selectedIdolData.f_name}. You currently own 0 of this idol. </p>
                    <Incrementer i_id={searchParams.i_id} r_id={params.id} variant={searchParams.variant} count={countData} />
                </div>
            )
        } else {
            return (
                <div>
                    <p> You have selected {selectedIdolData.f_name}. You currently own {JSON.stringify(countData.qty)} of this idol. </p>
                    <Incrementer i_id={searchParams.i_id} r_id={params.id} variant={searchParams.variant} count={countData} />
                </div>
            )
        }
    // case where there is no idol selected yet
    } else {
        return (
            <p> Please select an Idol. </p>
        )
    }
}

export default async function ReleasePage({ params, searchParams }) {
    const supabase = createClient();
    // query the name, price, etc. of the release
    const { data: releaseData, error: releaseError } = await supabase.from('Releases').select().eq('id', params.id).single();
    // query the ID of every idol that is inside this release. 
    const { data: mergeData, error: mergeError } = await supabase.from('idol-release merge').select().eq('r_id', params.id);

    return (
        <div>
            <Header />
            <div className=" grid grid-cols-2 pb-10 ">
                <div className="flex justify-end px-10">
                    <div className="">
                        <MainImage release_name={releaseData.name} />
                        <p className="text-2xl font-semibold">{releaseData.name}</p>
                        <p className="text-xs"> {releaseData.original_name}</p>
                        <br />
                        <p>Release date: {releaseData.release_date}</p>
                        <p>Individual price: {releaseData.price_indiv}</p>
                        <p>Box price: {releaseData.price_box}</p>
                        <p>Origin Country: {releaseData.origin}</p>
                        <p>Dimensions: {releaseData.dimensions}</p>
                    </div>
                </div>
                <div className="flex flex-wrap pr-10">
                    <div>
                        <IncrementerImplementation params={params} searchParams={searchParams} />
                    </div>
                    <div className="flex flex-wrap pr-10">
                        {mergeData.map(async (val, key) => {
                            // fetching the idol for each individual release, then feeding it to a button component
                            const { data: idolData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                            return (<IdolNameButton key = {key} i_id={val.i_id} name={idolData.f_name} r_id={releaseData.id} variant={val.variant} />)
                        })}
                    </div>
                </div>
            </div >
            <Footer/>
        </div>
    )
}