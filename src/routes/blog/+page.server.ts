import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "../../sanityClient";

export const load = (async () => {
  const queryPosts = `*[_type == "post"] {slug, publishedAt, author->, main_image, title, short_desc} | order(dateTime(publishedAt) desc)`;

  let allPosts = await client.fetch(queryPosts);

  if (allPosts) {
    return { allPosts };
  }

  throw error(404, "Not found");
}) satisfies PageServerLoad;
