import ReleaseTable from './releases/release-table.js';
import LoginForm from './login/login-form.js';
import Header from '@/app/_components/header'
import './globals.css'
import 'tailwindcss/tailwind.css'
import HowToUse from './_components/how-to-use.js'
import Footer from '@/app/_components/footer'
import SearchComponent from './_components/_search/search-by-name.js';
import CategoryFilter from './_components/_search/category-filter.js';

export default function Home({ params, searchParams }) {
  return (
    <div>
      <div className="flex justify-center"> <Header /> </div>
      <div>
        <div className="grid grid-cols-[20%_80%] px-5 pt-5">
          <SearchComponent params={""} />
          <HowToUse className="px-5"/>
        </div>
      </div>
      <div className="grid grid-cols-[20%_80%] p-5">
        <CategoryFilter />
        <ReleaseTable params={params} searchParams={searchParams} />
      </div>
      <Footer />
    </div>
  );
}
