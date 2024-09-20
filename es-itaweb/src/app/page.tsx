import ReleaseTable from './releases/release_table.js';
import LoginPage from './login/page.jsx';
import Header from './header/header.js'
import './globals.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center"> <Header/> 
      </div>
      <div className="flex justify-center p-5">
        <ReleaseTable/> 
        <LoginPage/> 
      </div>
    </div>
  );
}
