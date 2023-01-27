import type { PageServerLoad } from "./$types";
import client from "$lib/sanityClient";

export const load = (async () => {
  const queryPageInfo = `*[_type == "staticPages" && name == "About Us"]`;

  let pageInfo = await client.fetch(queryPageInfo);

  if (pageInfo) {
    return { pageInfo: pageInfo[0] };
  }
}) satisfies PageServerLoad;
