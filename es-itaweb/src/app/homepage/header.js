import Link from 'next/link'
import { createClient } from '@/supabase/server'

async function LoginStatus() {
    const supabase = createClient()
  
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      return <p> You are not logged in. </p>
    }
    return <p> {data.user.email}</p>
  }

export default function Header() {
    return (
        <div className="flex justify-center py-5 w-full columns-3" >
            <Link href="/" className ="pr-5"> ES Itaweb!! </Link>
            <div>
                <Link href="/about" className="pr-5">About</Link>
                <Link href="/profile" className="pr-5">Profile</Link>
            </div>
            <div>
                <LoginStatus />
            </div>
        </div>)
}