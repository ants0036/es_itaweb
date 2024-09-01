'use server'
import { createClient } from '../../../utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function update (formData: FormData) {
    'use server'
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();

    const count = formData.get('count');
    const i_id = formData.get('i_id');
    const r_id = formData.get('r_id');
    const variant = formData.get('variant');
    /*console.log(count)
    console.log(user.id)
    console.log(i_id)
    console.log(r_id)*/

    const { data, error } = await supabase.from('user_data').upsert({qty: count, user_id: user.id, r_id: r_id, i_id: i_id, variant:variant}, {onConflict: 'r_id, i_id, variant, user_id'})
    
    console.log (error)
    revalidatePath('/releases/[id]', 'layout')
}