import ReleaseTable from './releases/release_table.js';
import LoginPage from './login/page.tsx';
import Header from './header/header.js'

export default function Home() {
  return (
    <div>
      <div className="flex_center"> <Header/> 
      </div>
      <div className="flex_center">
         <ReleaseTable/> 
        <div><LoginPage/> </div>
      </div>
    </div>
  );
}
