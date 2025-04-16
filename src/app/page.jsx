
import LoginForm from './login/login-form.js';
import Header from '@/app/_components/header'
import './globals.css'
import 'tailwindcss/tailwind.css'
import HowToUse from './_components/how-to-use.js'
import Footer from '@/app/_components/footer'
import SearchByName from './_components/_search/search-by-name.js';
import CategoryFilter from './_components/_search/category-filter.js';
import ReleaseCollectionTable from './_components/_releases-and-collection/release-collection-table.js';

export default function Home({ params, searchParams }) {
  return (
    <div>
      <div className="flex justify-center"> <Header /> </div>
      <div>
        <div className="grid grid-cols-[20%_80%] px-5 pt-5">
          <SearchByName params={""} />
          <HowToUse className="px-5"/>
        </div>
      </div>
      <div className="grid grid-cols-[20%_80%] p-5">
        <CategoryFilter />
        <ReleaseCollectionTable searchParams={searchParams} isCollection={false}/>
      </div>
      <Footer />
    </div>
  );
}
