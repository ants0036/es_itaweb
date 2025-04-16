import { createClient } from '../../../utils/supabase/server'
import SquareCloudinaryImage from '@/app/_components/_releases-and-collection/square-cloudinary-image'
import IdolNameButton from '../_components/idolname-button.js'
import IncrementerForm from '../_components/incrementer-form'
import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'

// component for a singular merch item. 
export default async function ReleasePage({ params, searchParams }) {
    const supabase = createClient();
    // query the name, price, etc. of the release
    const { data: releaseData, error: releaseError } = await supabase.from('Releases').select().eq('id', params.id).single();
    // query the ID of every idol that is inside this release. 
    const { data: mergeData, error: mergeError } = await supabase.from('idol-release merge').select().eq('r_id', params.id);

    async function Incrementer() {
        const { data: { user } } = await supabase.auth.getUser();
    
        if (user == null) {
            return (
                <p> Please log in. </p>
            )
        }
        // if there is currently an idol selected; 
        else if (searchParams.i_id != null) {
            // fetch the user's data of the current idol.
            const { data: countData, error: countError } = await supabase.from('user_data').select('qty').eq('r_id', params.id).eq('i_id', searchParams.i_id).eq('user_id', user.id).single();
            // fetch the selected idol's information.
            const { data: selectedIdolData, error: idolError } = await supabase.from('Idols').select().eq('id', searchParams.i_id).single();
    

            if (countData == null) {
                var TotalOwned = 0
            } else {
                var TotalOwned = JSON.stringify(countData.qty)
            }

            return (
                <div>
                    <p> You have selected {selectedIdolData.f_name}. You currently own {TotalOwned} of this idol. </p>
                    <IncrementerForm i_id={searchParams.i_id} r_id={params.id} variant={searchParams.variant} count={countData} />
                </div>
            )
        // no idol selected;
        } else {
            return (
                <p> Please select an Idol. </p>
            )
        }
    }

    return (
        <div>
            <Header />
            <div className=" grid grid-cols-2 pb-10 ">
                <div className="flex justify-end px-10">
                    <div className="">
                        <SquareCloudinaryImage release_name={releaseData.name} />
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
                <div>
                    <div className ="pb-5">
                        <Incrementer/>
                    </div>
                    <div className="flex flex-wrap pr-10">
                        {mergeData.map(async (val, key) => {
                            // query first & second idol 
                            const { data: idolData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                            const idolDataName1 = idolData.f_name
                            var idolDataName2 = null
                            var idolDataName3 = null

                            // if there is a second idol, try to query the third. i hate wakuwaku trip stands for making me do this. spaghetti 
                            if (val.i_id2 != null) {
                                const { data: idolData2, error: idolError2 } = await supabase.from('Idols').select().eq('id', val.i_id2).single();
                                idolDataName2 = idolData2.f_name
                                console.log("idolDataName2 = idolData2.f_name")
                                if (val.i_id3 != null) {
                                    const { data: idolData3, error: idolError3 } = await supabase.from('Idols').select().eq('id', val.i_id3).single();
                                    console.log("idolDataName3 = idolData3.f_name")
                                    idolDataName3 = idolData3.f_name 
                                }
                            }

                            return (<IdolNameButton key = {key} i_id={val.i_id} name={idolDataName1} name2 = {idolDataName2} name3 = {idolDataName3} r_id={releaseData.id} variant={val.variant} />)
                        })}
                    </div>
                </div>
            </div >
            <Footer/>
        </div>
    )
}