import ReleaseTable from './releases/release-table.js';
import LoginForm from './login/login-form.js';
import Header from './homepage/header.js'
import './globals.css'
import 'tailwindcss/tailwind.css'
import Disclaimer from './homepage/disclaimer.js'
import Footer from './homepage/footer.js'
import SearchComponent from './search/search-component.js';
import SearchSideBar from './search/search-sidebar.js'

export default function Home({ params, searchParams }) {
  return (
    <div>
      <div className="flex justify-center"> <Header /> </div>
      <div>
        <div className="grid grid-cols-[20%_80%] px-5 pt-5">
          <SearchComponent params={""} />
          <Disclaimer className="px-5"/>
        </div>
      </div>
      <div className="grid grid-cols-[20%_80%] p-5">
        <SearchSideBar />
        <ReleaseTable params={params} searchParams={searchParams} />
      </div>
      <Footer />
    </div>
  );
}
