import Header from '../homepage/header'
import LoginForm from './loginform.js'

export default function LoginPage() {
  return (
    <div>
      <Header/>
      <div className="grid place-content-center">
        <LoginForm/>
        <p> changelog 12.23.24: selection overhaul</p>
      </div>
    </div>
  )
}