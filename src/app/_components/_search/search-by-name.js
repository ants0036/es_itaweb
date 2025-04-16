"use client";
import { search } from "./actions";
import { useSearchParams } from "next/navigation";

export default function SearchByName({ params }) {
  const SearchBarParams = new URLSearchParams(useSearchParams().toString());

  var category = SearchBarParams.get("category") ?? "";

  // buttons are spaghetti but i can't abstract it out with the searchparams?
  return (
    <div>
      <p className="text-xs">
        {" "}
        *Search bar works with ONLY the full name of the item.{" "}
      </p>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search"
      />
      <form>
        <span className="material-symbols-outlined"> search </span>
        <input
          className="border border-sky-600"
          id="search"
          name="search"
          type="text"
        ></input>
        <input type="hidden" id="category" name="category" value={category} />
        <input
          type="hidden"
          id="category"
          name="params"
          value={params}
          className="w-full"
        />
        <button className="text-sky-600 pl-2" formAction={search}>
          Search
        </button>
      </form>
    </div>
  );
}
