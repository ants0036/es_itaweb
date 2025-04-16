'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email')
  const password = formData.get('password')

  if (typeof email === "string" && typeof password === "string") {
    const data = {
      email: email,
      password: password
    }
  
    const { error } = await supabase.auth.signInWithPassword(data)
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
 
  } else {
    redirect('/error')
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email')
  const password = formData.get('password')

  if (typeof email === "string" && typeof password === "string") {
    const data = {
      email: email,
      password: password
    }
  
    const { error } = await supabase.auth.signUp(data)
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
 
  } else {
    redirect('/error')
  }
}

export async function signout() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}
