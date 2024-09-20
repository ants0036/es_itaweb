import Link from 'next/link'
import LoginStatus from './login_status.js'

export default function Header() {
    return (
    <div className = "flex grow justify-center p-5">
        <Link href="/" className = "pr-5">Home</Link>
        <Link href="/private" className = "pr-5">Profile</Link>
        <LoginStatus/>
    </div> )
}