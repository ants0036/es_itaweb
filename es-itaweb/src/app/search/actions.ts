"use client"
import {redirect} from "next/navigation";
export function search (formData: FormData) {
    const params = formData.get('search') as string;
    const category = formData.get("category") as string;

    // if no search was inputted / search reset
    if (params == '' && category == '') {
        console.log ("option 1")
        redirect(`/?`)
    // if category button was hit but no name 
    } else if (params == '' && category != '') {
        console.log ("option 2")
        redirect(`/?category=${(category)}`)
    // if name, no category
    } else if (params != '' && category == '') {
        console.log ("option 3")
        redirect(`/?name=${params.toString()}`)
    } else {
        redirect(`/?category=${(category)}&name=${params.toString()}`)
    }
}