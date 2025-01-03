import { redirect } from 'next/navigation'
import UserInventory from './user-inventory.js'
import Header from '../homepage/header.js'
import UserAnalytics from './user-analytics.js'
import { createClient } from '../../supabase/server.ts'
import Footer from '../homepage/footer.js'
import PageTurner from '../releases/page-turner.js'

export default async function ProfilePage({searchParams}) {
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
      <UserAnalytics/>
      <div className="p-5">
        <UserInventory searchParams = {searchParams}/>
        <PageTurner className = "py-5"/>
      </div>
      <Footer/>
    </div>
  )
}