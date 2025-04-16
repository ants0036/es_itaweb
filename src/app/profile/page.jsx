import { redirect } from 'next/navigation'
import Header from '../_components/header.js'
import UserAnalytics from './user-analytics.js'
import { createClient } from '@/utils/supabase/server'
import Footer from '@/app/_components/footer'
import ReleaseCollectionTable from '../_components/_releases-and-collection/release-collection-table.js'

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
        <ReleaseCollectionTable  searchParams = {searchParams} isCollection = {true}/>
      </div>
      <Footer/>
    </div>
  )
}