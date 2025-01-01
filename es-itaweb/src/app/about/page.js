import Header from '@/app/homepage/header';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <Header />
            <div className="grid place-content-center">
                <p>ES itaweb!! is an in-progress database of Ensemble Stars!! merch releases that allows users to view different releases and track their collection progress.</p>
                <p>Built with <Link href="https://nextjs.org/" className="text-sky-600 ">Next.js</Link>, <Link href="https://supabase.com" className="text-sky-600 ">Supabase</Link>, <Link href="https://next.cloudinary.dev/" className="text-sky-600" >Next Cloudinary</Link>, & <Link href="https://tailwindcss.com" className="text-sky-600 ">Tailwind CSS</Link></p>
                <p>Full-Stack Development: mogisa_ram</p>
                <p>Database Administration: neo</p>
                <p>Graphics: yul</p>
                <Link href="/about/changelog" className="text-sky-600 ">changelog</Link>
            </div>
        </div>
    )
}