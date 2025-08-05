import { createClient } from "../../../utils/supabase/server";
import ReleaseListing from "../../releases/_components/release-listing";
import SearchByName from "../_search/search-by-name";
import PageTurner from "./page-turner";

export default async function ReleaseCollectionTable({
  searchParams,
  isCollection,
}) {
  const supabase = createClient();
  var releases;
  var category = searchParams["category"] ?? "";
  var releaseName = searchParams["name"] ?? "";

  // to calculate pages
  var page = parseInt(searchParams["page"] ?? 0);
  var currentPage = page * 25;
  var nextPage = (page + 1) * 25 - 1;

  // query based off of search params
  if (category != "" && releaseName != "") {
    var { data: releases } = await supabase
      .from("Releases")
      .select()
      .eq("category", category)
      .ilike("name", releaseName)
      .range(currentPage, nextPage);
  } else if (releaseName != "" && category == "") {
    var { data: releases } = await supabase
      .from("Releases")
      .select()
      .ilike("name", releaseName)
      .range(currentPage, nextPage);
  } else if (releaseName == "" && category != "") {
    var { data: releases } = await supabase
      .from("Releases")
      .select()
      .eq("category", category)
      .range(currentPage, nextPage);
  } else {
    var { data: releases } = await supabase
      .from("Releases")
      .select()
      .range(currentPage, nextPage);
  }

  if (isCollection) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    var releaseIDs = releases.map((val, key) => {
      return val.id;
    });

    // querying user data
    const { data: CollectionData, error: CollectionError } = await supabase
      .from("user_data")
      .select()
      .in("r_id", releaseIDs)
      .eq("user_id", user.id)
      .range(parseInt(page) * 25, (parseInt(page) + 1) * 25 - 1);

    return (
      <div>
        <div className="flex justify-center pt-5">
          <p className="text-xl "> Collection </p>
        </div>
        <SearchByName params={"profile"} />
        <div className="pt-5 flex flex-wrap justify-items center">
          {CollectionData.map(async (val, key) => {
            const { data: rData, error: rDataError } = await supabase
              .from("Releases")
              .select()
              .eq("id", val.r_id)
              .single();
            const { data: iData, error: idolError } = await supabase
              .from("Idols")
              .select()
              .eq("id", val.i_id)
              .single();
            return (
              <div className="p-3 basis-2xs" key={key}>
                <ReleaseListing val={rData} key={key} />
                <p>
                  {" "}
                  {iData.f_name} {val.variant} {val.qty}
                </p>
              </div>
            );
          })}
        </div>
        <PageTurner className="py-5" />
      </div>
    );
  } else {
    return (
      <div className>
        <div className="grid grid-cols-4">
          {releases.map((val, key) => {
            return (
              <div className="px-3 pb-3" key={key}>
                <ReleaseListing val={val} key={key} />
              </div>
            );
          })}
        </div>
        <PageTurner className="py-5" />
      </div>
    );
  }
}
