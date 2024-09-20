import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'
import UserInventory from './UserInventory.js'
import Header from '../header/header'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div >
      <div> 
        <Header/> 
      </div>
      <div >
        <UserInventory/>
      </div>
    </div>
  )
}