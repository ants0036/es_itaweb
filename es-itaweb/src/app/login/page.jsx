import Header from '../homepage/header'
import LoginForm from './loginform.js'

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