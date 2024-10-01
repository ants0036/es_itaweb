import ReleaseTable from './releases/release_table.js';
import LoginPage from './login/page.jsx';
import Header from './homepage/header.js'
import './globals.css'
import 'tailwindcss/tailwind.css'
import Disclaimer from './homepage/disclaimer.js'
import Footer from './homepage/footer.js'
import * as React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center"> <Header />
      </div>
      <div>
        <Disclaimer/>
      </div>
      <div className="flex justify-center p-5">
        <ReleaseTable />
        <LoginPage />
      </div>
      <Footer/>
    </div>
  );
}
