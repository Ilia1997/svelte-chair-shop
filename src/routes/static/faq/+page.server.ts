import type { PageServerLoad } from "./$types";
import client from "../../../sanityClient";

export const load = (async () => {
  const queryPageInfo = `*[_type == "FAQ"] {
    question,
    answer,
    seoTitle, 
    seoDesc, 
    seoKeywords
  }`;

  let pageInfo = await client.fetch(queryPageInfo);

  if (pageInfo) {
    return { pageInfo };
  }
}) satisfies PageServerLoad;
