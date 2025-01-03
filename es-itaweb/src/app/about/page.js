import Header from '@/app/homepage/header';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <Header />
            <div className=" flex justify-center px-[10%]">
                <div className="px-10">
                    <img src="https://static.wikia.nocookie.net/ensemble-stars/images/e/e5/Nagisa_Ran_4.png" />
                </div>
                <div>
                    <div className="py-4">
                        <p className="text-xl">About</p>
                        <p>ES itaweb!! is an in-progress database of Ensemble Stars!! merch releases that allows users to view different releases and track their collection progress.</p>
                        <p>Built with <Link href="https://nextjs.org/" className="text-sky-600 ">Next.js</Link>, <Link href="https://supabase.com" className="text-sky-600 ">Supabase</Link>, <Link href="https://next.cloudinary.dev/" className="text-sky-600" >Next Cloudinary</Link>, & <Link href="https://tailwindcss.com" className="text-sky-600 ">Tailwind CSS</Link></p>
                    </div>
                    <div className="py-4">
                        <p className="text-xl">Credits</p>
                        <p>Full-Stack Development: nagisafs2</p>
                        <p>Database Administration: neo</p>
                        <p>Graphics: yul</p>
                    </div>
                    <Link href="/about/changelog" className="text-sky-600 text-xl ">Changelog</Link>
                </div>
            </div>
        </div>
    )
}