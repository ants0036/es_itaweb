import Link from 'next/link'
import LoginStatus from './login-status.js'

export default function Header() {
    return (
        <div className="flex justify-center py-5 w-full columns-3" >
            <Link href="/about" className ="pr-5"> ES Itaweb!! </Link>
            <div>
                <Link href="/" className="pr-5">Home</Link>
                <Link href="/profile" className="pr-5">Profile</Link>
            </div>
            <div>
                <LoginStatus />
            </div>
        </div>)
}