"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

// this component assumes val to be a singular instance of a release.
export default function ReleaseListing({ val, key }) {
  const main_src = val.name.concat(" Main");
  return (
    <div key={key} className ="w-2xs">
      <a className = "text-wrap" href={`/releases/${encodeURIComponent(val.id)}`}>
        <div className="py-2">
          <CldImage
            className="border-slate-900 border border-solid rounded"
            width="200"
            height="200"
            src={main_src}
            sizes="100vw"
          />
        </div>
      </a>
      <p className="text-xs "> {val.release_date} </p>
      <Link
        className="text-sky-600 font-semibold"
        href={`/releases/${encodeURIComponent(val.id)}`}
      >
        {" "}
        {val.name}{" "}
      </Link>
    </div>
  );
}
