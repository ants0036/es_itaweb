import Header from '@/app/homepage/header';
import Link from 'next/link';

export default function Changelog() {
    return (
        <div>
            <Header />
            <div className="grid place-content-center">
                <div className="py-4">
                    <p className="text-xl">Ver 0.2.01 - Dec 31 2024</p>
                    <p className="text-lg"> Added </p>
                    <ul className='list-disc list-inside'>
                        <li>Plain text about page.</li>
                        <li>Plain text changelog.</li>
                        <li>Special For Princess! members to database.</li>
                    </ul>
                    <p className="text-lg"> Fixed </p>
                    <ul className='list-disc list-inside'>
                        <li>Unauthorized users can select idols inside a release page without leading to an error.</li>
                        <li>Centered login page so it doesn't float in the corner.</li>
                        <li>Edge case releases with multiple idols (wkwk trip acrylics) now display every idol in the button.</li>
                    </ul>
                    <p className="text-lg"> Removed </p>
                    <ul className='list-disc list-inside'>
                        <li>Depreciated branch on Github.</li>
                    </ul>
                    <p className="text-lg"> Security </p>
                    <ul className='list-disc list-inside'>
                        <li>Added input validation to login functionality.</li>
                    </ul>
                </div>
                <div className="py-4">
                    <p className="text-xl">Ver 0.2 - Dec 23 2024</p>
                    <p className="text-lg"> Changed </p>
                    <ul className='list-disc list-inside'>
                        <li>Replaced the selection UI in the individual release pages into a group of buttons and a singular updater form in order to make it easier on the eyes.</li>
                    </ul>
                    <p className="text-lg"> Fixed </p>
                    <ul className='list-disc list-inside'>
                        <li>Users are now able to view releases without logging in.</li>
                        <li>Releases of the same idol (ex. Season 2 & Climax Shu spotlight bagdes) now show a variant on the button.</li>
                        <li>Double Face Madara & Double Face Kohaku are variants and not different idols from their MaM/Crazy:B counterparts.</li>
                    </ul>
                </div>
                <div className="py-4">
                    <p className="text-xl">Ver 0.1 - Oct 1 2024</p>
                    <p className="text-lg"> Added </p>
                    <ul className='list-disc list-inside'>
                        <li>Added authorization support; users can now log in and track collection progress.</li>
                        <li>Users can now log the quantity of each release they own and view that number in the release page alongside the profile.</li>
                        <li>Added profile stats; users can view how much they have spent in USD, CAD, and JPY.</li>
                        <li>Added first entries to database, consisting of the spotlight & trip series.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}