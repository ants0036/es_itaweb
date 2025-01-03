import Header from '../homepage/header'
import LoginForm from './login-form.js'

export default function LoginPage() {
  return (
    <div>
      <Header/>
      <div className="grid place-content-center">
        <LoginForm/>
      </div>
    </div>
  )
}