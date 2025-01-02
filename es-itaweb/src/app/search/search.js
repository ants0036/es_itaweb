"use client"
import { search } from "./actions"
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchComponent() {
    const SearchBarParams = new URLSearchParams(useSearchParams().toString());
    const router = useRouter()
    const buttonClass = "p-2 rounded hover:bg-blue-100 border border-gray-200"
    console.log({SearchBarParams})

    // buttons are spaghetti but i can't abstract it out with the searchparams?
    return (
        <div>
            <p className = "text-xs"> *Search bar works with ONLY the full name of the item. </p>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search" />
            <form>
                <span className="material-symbols-outlined"> search </span>
                <input className="border border-sky-600" id="search" name="search" type="text"></input>
                <input type="hidden" id="category" name="category" value={SearchBarParams.get("category")} />
                <button className="text-sky-600 pl-2" formAction={search}>Search</button>
            </form>
            
            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                router.push(`/?`)
            }}>
                All
            </button>

            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                SearchBarParams.append("category", "Acrylic stand")
                router.push(`?${SearchBarParams.toString()}`)
            }}>
                Acrylic stands
            </button>

            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                SearchBarParams.append("category", "Badge")
                router.push(`?${SearchBarParams.toString()}`)
            }}>
                Badges
            </button>

            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                SearchBarParams.append("category", "Clear file")
                router.push(`?${SearchBarParams.toString()}`)
            }}>
                Clear Files
            </button>

            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                SearchBarParams.append("category", "Pasha")
                router.push(`?${SearchBarParams.toString()}`)
            }}>
                Pashas
            </button>

            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                SearchBarParams.append("category", "Keychain")
                router.push(`?${SearchBarParams.toString()}`)
            }}>
                Keychains
            </button>

            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("category")
                SearchBarParams.delete("name")
                SearchBarParams.append("category", "Etc")
                router.push(`?${SearchBarParams.toString()}`)
            }}>
                Misc.
            </button>

        </div>
    )

}