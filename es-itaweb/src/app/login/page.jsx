import { login, signup, signout } from './actions'

export default function LoginPage() {
  return (
    <div>
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <br></br>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <br></br>
      <button  formAction={login} className="pr-3 text-sky-600">Log in</button>
      <button formAction={signup} className="pr-3 text-sky-600">Sign up</button>
      <button className = "text-sky-600" formAction={signout}>Log out</button>
    </form>
    <p> changelog 9.23.24: UI overhaul + currency total added</p>
    </div>
  )
}