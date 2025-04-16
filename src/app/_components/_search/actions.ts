"use client"
import {redirect} from "next/navigation";

export function search (formData: FormData) {
    const params = formData.get('params') as string; 
    const name = formData.get('search') as string;
    const category = formData.get("category") as string;

    // if no search was inputted / search reset
    if (name == '' && category == '') {
        console.log ("option 1") 
        redirect(`/${(params)}?`)
    // if category button was hit but no name 
    } else if (name == '' && category != '') {
        console.log ("option 2")
        redirect(`/${(params)}?category=${(category)}`)
    // if name, no category
    } else if (name != '' && category == '') {
        console.log ("option 3")
        redirect(`/${(params)}?name=${name.toString()}`)
    } else {
        redirect(`/${(params)}?category=${(category)}&name=${name.toString()}`)
    }
}