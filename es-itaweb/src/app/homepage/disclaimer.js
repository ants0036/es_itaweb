"use client"
import { CldImage } from 'next-cloudinary';

export default function Disclaimer() {
    return (
    <div className="columns-2 w-full p-5 bg-blue-900 text-white flex justify-center">
        <div className="">
            <CldImage className="justify-self-end" width="100" height="100" src={"Nagisa_Chibi_Home"} />
        </div>
        <div className="p-5">
            <p> <br></br>This website is intended to be used as a personal tracker for merch collection progress. 
            <br></br>Click into each listing and choose how many pieces of each character you have.
            </p>
        </div>
    </div>
)}