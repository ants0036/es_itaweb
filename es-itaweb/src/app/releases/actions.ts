'use server'
import { createClient } from '../../../utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function update (formData: FormData, r_id: number, i_id: number, variant: string) {
    const supabase = createClient();
    const {data: { user }} = await supabase.auth.getUser();

    // won't let me get form data? 
    const count = {count: formData.get("count")};

    const { data, error } = await supabase.from('user_data').upsert({ user_id: user, r_id: r_id, i_id: i_id, qty: count, variant: variant}).select()
    
    // don't know how to do this. 
    revalidatePath('/releases/[id]', 'layout')
    redirect('/')
}