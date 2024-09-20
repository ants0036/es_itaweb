import ReleaseTable from './releases/release_table.js';
import LoginPage from './login/page.tsx';
import Header from './header/header.js'
import './globals.css'

export default function Home() {
  return (
    <div>
      <div className="justify-center"> <Header/> 
      </div>
      <div className="justify-center">
         <ReleaseTable/> 
        <div><LoginPage/> </div>
      </div>
    </div>
  );
}
