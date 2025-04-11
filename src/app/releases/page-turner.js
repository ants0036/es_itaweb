"use client"
import { useRouter, useSearchParams } from "next/navigation";

export default function PageTurner () {
    const SearchBarParams = new URLSearchParams(useSearchParams().toString());
    const router = useRouter()
    const buttonClass = "p-2 rounded hover:bg-blue-100 border border-gray-200"

    return (
        <div>
            <button className={buttonClass} onClick={() => {
                var pagenum  = SearchBarParams.get("page")
                if (pagenum == null) {
                    pagenum = 0
                }
                SearchBarParams.delete("page")
                SearchBarParams.append("page", parseInt(pagenum) - 1)
                router.push(`?${SearchBarParams.toString()}`)
                router.refresh()
            }}>
                Previous page 
            </button>
            <button className={buttonClass} onClick={() => {
                var pagenum  = SearchBarParams.get("page")
                if (pagenum == null) {
                    pagenum = 0
                }
                SearchBarParams.delete("page")
                SearchBarParams.append("page", parseInt(pagenum) + 1)
                router.push(`?${SearchBarParams.toString()}`)
                router.refresh()
            }}>
                Next Page
            </button>
        </div>
    )

}