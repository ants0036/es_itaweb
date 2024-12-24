'use server'
import { createClient } from '../../supabase/server'
import { revalidatePath } from 'next/cache'

export async function update (formData: FormData) {
    'use server'
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();

    if (user == null) {
        return;
    }

    const count = formData.get('count');
    const i_id = formData.get('i_id');
    const r_id = formData.get('r_id');
    const variant = formData.get('variant');

    if (variant == "null") {
        console.log ("null variant")
        console.log({count}, {i_id}, {r_id}, {variant})
        const { data, error } = await supabase.from('user_data').upsert({qty: count, user_id: user.id, r_id: r_id, i_id: i_id }, {onConflict: 'r_id, i_id, user_id'})
        console.log (error)
        console.log (data)
    } else {
        console.log ("filled variant")
        const { data, error } = await supabase.from('user_data').upsert({qty: count, user_id: user.id, r_id: r_id, i_id: i_id, variant:variant}, {onConflict: 'r_id, i_id, variant, user_id'})
        console.log (error)
        console.log (data)
    }

    revalidatePath('/releases/[id]', 'layout')
}