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
        const { data, error } = await supabase.from('user_data').upsert({qty: count, user_id: user.id, r_id: r_id, i_id: i_id }, {onConflict: 'r_id, i_id, user_id'})
    } else {
        const { data, error } = await supabase.from('user_data').upsert({qty: count, user_id: user.id, r_id: r_id, i_id: i_id, variant:variant}, {onConflict: 'r_id, i_id, variant, user_id'})
    }

    revalidatePath('/releases/[id]', 'layout')
}