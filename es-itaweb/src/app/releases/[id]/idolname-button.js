"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// a singular, client-side button of an idol's name. selecting the name will add the idol's ID and variant to the current URL. 
export default function IdolNameButton({ i_id, name, variant }) {
    const searchParams = new URLSearchParams(useSearchParams().toString());
    const router = useRouter()
    
    // if the current button is the selected one; 
    if (searchParams.has("i_id", { i_id }.i_id)) {
        if (searchParams.has("variant", JSON.stringify({ variant }.variant))) {
            return (
                <div className="p-1">
                    <button className="p-2 rounded bg-gray-700 text-white border border-gray-700 hover:text-black hover:bg-white" onClick={() => {
                        searchParams.delete("i_id")
                        searchParams.delete("variant")
                        searchParams.append("i_id", JSON.stringify({ i_id }.i_id))
                        searchParams.append("variant", JSON.stringify({ variant }.variant))
                        router.push(`?${searchParams.toString()}`)
                    }}>
                        {name} {variant}
                    </button>
                </div>)
        }
    // todo: spaghetti else 
    } else {
        return (
            <div className="p-1">
                <button className="p-2 rounded hover:bg-blue-100 border border-gray-200 " onClick={() => {
                    searchParams.delete("i_id")
                    searchParams.delete("variant")
                    searchParams.append("i_id", JSON.stringify({ i_id }.i_id))
                    searchParams.append("variant", JSON.stringify({ variant }.variant))
                    router.push(`?${searchParams.toString()}`)
                }}>
                    {name} {variant}
                </button>
            </div>
        )
    }

}