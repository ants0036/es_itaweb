"use client"
import next from "next";
import { useRouter, useSearchParams } from "next/navigation";

// component at the bottom of every table that controls pagination. 
export default function PageTurner () {
    const SearchBarParams = new URLSearchParams(useSearchParams().toString());
    const router = useRouter()
    const buttonClass = "p-2 rounded hover:bg-blue-100 border border-gray-200"

    var pagenum  = SearchBarParams.get("page")
    if (pagenum == null) {
        pagenum = 0
    }

    function PageButton (PageForward) {
        if (PageForward == true) {
            var nextPage = pagenum + 1
            var buttonText = "Next Page"
        } else {
            if (pagenum == 0) {
                var nextPage = 0
            } else {
                var nextPage = pagenum - 1
            }
            var buttonText = "Previous Page"
        }
        return (
            <button className={buttonClass} onClick={() => {
                SearchBarParams.delete("page")
                SearchBarParams.append("page", nextPage)
                router.push(`?${SearchBarParams.toString()}`)
                router.refresh()
            }}>
                {buttonText}
            </button>
        )
    }

    return (
        <div>
            <PageButton PageForward ={false} />
            <PageButton PageForward ={true} />
        </div>
    )

}