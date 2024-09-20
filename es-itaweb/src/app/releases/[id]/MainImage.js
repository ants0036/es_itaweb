"use client"
import { CldImage } from 'next-cloudinary';

export default function MainImage ({release_name}) {
    const main_src = release_name.concat(" Main")
    // it's currently a square and idk how to change this :sob: i want it to be dymnamic.
    return (<CldImage width="300" height="300" src= {main_src}sizes="100vw"/>)
}