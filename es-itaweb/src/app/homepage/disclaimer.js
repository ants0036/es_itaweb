"use client"
import { CldImage } from 'next-cloudinary';

export default function Disclaimer() {
    return (
    <div className="columns-2 w-full p-5 bg-blue-900 text-white flex justify-center">
        <div className="">
            <CldImage className="justify-self-end" width="100" height="100" src={"Nagisa_Chibi_Home"} />
        </div>
        <div className="p-5">
            <p> this website is not affiliated with enstars. for official listings of each release, check <a href = "https://pattythree-shop.jp/" className="text-blue-300"> the patty three website.</a>  <br></br>it is also very buggy so please forgive me</p>
        </div>
    </div>
)}