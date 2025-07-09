"use client";
import { useRouter, useSearchParams } from "next/navigation";

// A sidebar component to filter out items by category or name.
export default function CategoryFilter({ params }) {
  const SearchBarParams = new URLSearchParams(useSearchParams().toString());
  const router = useRouter();
  const buttonClass = "p-2 rounded hover:bg-blue-100 border border-gray-200";

  function deleteCategoryAndName() {
    SearchBarParams.delete("category");
    SearchBarParams.delete("name");
  }

  return (
    <div className="grid max-h-96">
      <p> Search by category: </p>
      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          router.push(`?`);
        }}
      >
        All
      </button>

      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          SearchBarParams.append("category", "Acrylic stand");
          router.push(`?${SearchBarParams.toString()}`);
        }}
      >
        Acrylic stands
      </button>

      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          SearchBarParams.append("category", "Badge");
          router.push(`?${SearchBarParams.toString()}`);
        }}
      >
        Badges
      </button>

      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          SearchBarParams.append("category", "Clear file");
          router.push(`?${SearchBarParams.toString()}`);
        }}
      >
        Clear Files
      </button>

      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          SearchBarParams.append("category", "Pasha");
          router.push(`?${SearchBarParams.toString()}`);
        }}
      >
        Pashas
      </button>

      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          SearchBarParams.append("category", "Keychain");
          router.push(`?${SearchBarParams.toString()}`);
        }}
      >
        Keychains
      </button>

      <button
        className={buttonClass}
        onClick={() => {
          deleteCategoryAndName();
          SearchBarParams.append("category", "Etc");
          router.push(`?${SearchBarParams.toString()}`);
        }}
      >
        Misc.
      </button>
    </div>
  );
}
