import { createClient } from '../../../utils/supabase/server'

export default async function LoginStatus() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return <p> you are not logged in </p>
  }
  return <p> {data.user.email}</p>
}