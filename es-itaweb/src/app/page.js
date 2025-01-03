import ReleaseTable from './releases/release-table.js';
import LoginForm from './login/login-form.js';
import Header from './homepage/header.js'
import './globals.css'
import 'tailwindcss/tailwind.css'
import Disclaimer from './homepage/disclaimer.js'
import Footer from './homepage/footer.js'
import SearchComponent from './search/search-component.js';

export default function Home({params, searchParams}) {
  return (
    <div>
      <div className="flex justify-center"> <Header />
      </div>
      <div>
        <Disclaimer/>
      </div>
      <div className="flex justify-center p-5">
        <div>
          <SearchComponent params = {""}/>
          <ReleaseTable params = {params} searchParams = {searchParams}/>
        </div>
        <LoginForm />
      </div>
      <Footer/>
    </div>
  );
}
