"use client"
import { CldImage } from 'next-cloudinary';

// this is spaghetti code. delete later and just make one image calling utility? 
export default function HomeImage ({release_name}) {
    const main_src = release_name.concat(" Main")
    return (
    <div className="py-2"> <CldImage className = "border-slate-900 border border-solid rounded" width="200" height="200" src= {main_src}sizes="100vw"/> </div>)
}