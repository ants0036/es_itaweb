"use client";
import { useRouter, useSearchParams } from "next/navigation";

// somehow, the is (pageforward) thing doesn't work here? do this later...
/*
function PageButton (PageForward, pagenum) {
    const router = useRouter()
    const buttonClass = "p-2 rounded hover:bg-blue-100 border border-gray-200"
    if (PageForward) {
        var nextPage = pagenum + 1
        var buttonText = "Next Page"
        console.log(PageForward)
    } else {
        if (pagenum == 0) {
            var nextPage = 0
        } else {
            var nextPage = pagenum - 1
        }
        var buttonText = "Previous Page"
        console.log(PageForward)
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
}*/

// component at the bottom of every table that controls pagination.
export default function PageTurner() {
  const SearchBarParams = new URLSearchParams(useSearchParams().toString());
  const router = useRouter();
  const buttonClass = "p-2 rounded hover:bg-blue-100 border border-gray-200";
 
  var pagenum = SearchBarParams.get("page");
  if (pagenum == null) {
    var pagenumInt = 0;
    var previouspage = 0;
  } else {
    var pagenumInt = pagenum.parseInt();
    if (pagenumInt == 0) {
      var previouspage = 0;
    } else {
       var previouspage = pagenum - 1;
    }
  }

  return (
    <div>
      <button
        className={buttonClass}
        onClick={() => {
          SearchBarParams.delete("page");
          SearchBarParams.append("page", previouspage);
          router.push(`?${SearchBarParams.toString()}`);
          router.refresh();
        }}
      >
        Previous Page
      </button>
      <button
        className={buttonClass}
        onClick={() => {
          SearchBarParams.delete("page");
          SearchBarParams.append("page", pagenum + 1);
          router.push(`?${SearchBarParams.toString()}`);
          router.refresh();
        }}
      >
        Next Page{" "}
      </button>
    </div>
  );
}
