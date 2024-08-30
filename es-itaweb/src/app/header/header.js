import Link from 'next/link'
import LoginStatus from './login_status.js'

export default function Header() {
    return (
    <div className ="header">
        <Link href="/">Home</Link>
        <Link href="/private">Profile</Link>
        <LoginStatus/>
    </div> )
}