import { createClient } from '../../../utils/supabase/server'

export default async function UserInventory() {
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();
    const {data: inventoryData, error: inventoryError} = await supabase.from('user_data').select().eq('user_id', user.id);
    return (
        <div>
            <table className = "inventory_table">
                <tbody>
                    {inventoryData.map(async (val, key) => {
                        const {data: rData, error: rDataError} = await supabase.from('Releases').select().eq('id', val.r_id).single();
                        const { data: iData, error: idolError } = await supabase.from('Idols').select().eq('id', val.i_id).single();
                        return (
                            <tr key={key}>
                                <td> {rData.name}</td>
                                <td> {iData.f_name}</td>
                                <td> {val.qty}</td>
                                <td> {val.variant}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {JSON.stringify(inventoryData)} 
        </div>
    )
}