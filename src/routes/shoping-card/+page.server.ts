import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "../../sanityClient";

export const load: PageServerLoad = async ({ params }) => {
  const query = '*[_type == "animal"]';
  const post = await client.fetch(query);
  console.log(post);

  if (post) {
    return post;
  }

  throw error(404, "Not found");
};
