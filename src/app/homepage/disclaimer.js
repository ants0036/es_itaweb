"use client"
import { CldImage } from 'next-cloudinary';

export default function Disclaimer() {
    return (
        <div className="grid grid-cols-[10%_90%]">
            <div>
                <CldImage className="justify-self-center" width="50" height="50" src={"Nagisa_Chibi_Home"} />
            </div>
            <div>
                <p className="text-s"> This website is intended to be used as a personal tracker for merch collection progress.
                    <br></br>Click into each listing and choose how many pieces of each character you have.
                </p>
            </div>
        </div>
    )
}