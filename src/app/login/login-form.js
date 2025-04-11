import { login, signup, signout } from './actions'
import Link from 'next/link'
export default function LoginForm() {
    return (
        <div >
          <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <br></br>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <br></br>
            <button formAction={login} className="pr-3 text-sky-600">Log in</button>
            <button formAction={signup} className="pr-3 text-sky-600">Sign up</button>
            <button className="text-sky-600" formAction={signout}>Log out</button>
          </form>
          <p className ="pt-10">Ver 0.2.11 - <Link href="/about/changelog" className="pt-10 text-sky-600">Changelog</Link> </p>
        </div>

    )}