import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "../../sanityClient";

export const load: PageServerLoad = (async ({url}) => {
  
  // Test value: NEED CHANGE in the end
  const PAGE_SIZE: number = 2;
  // get page params from URL
  const PAGE: string = url.search || "?page=1";
  // get number of page from params
  // @ts-ignore
  const PAGE_NUMBER: any = PAGE.match(/\d+/)[0]
  // set start point for query
  const STARTFROM = PAGE_SIZE * (+PAGE_NUMBER - 1);
  // query: all
  const QUERY_ALL_POSTS: string = `*[_type == "post"] {slug, publishedAt, author->, main_image, title, short_desc} | order(dateTime(publishedAt) desc)`;
  // query: from .. to
  const QUERY_POSTS: string = `*[_type == "post"] {slug, publishedAt, author->, main_image, title, short_desc} | order(dateTime(publishedAt) desc)[${STARTFROM}..-1]`;
  // get posts
  const ALL_POSTS_ARR = await client.fetch(QUERY_ALL_POSTS);
  const ALL_POSTS = await client.fetch(QUERY_POSTS);
  // get posts quantity
  const ALL_POSTS_NUMBER = ALL_POSTS_ARR.length;
  // get pages quantity
  const PAGE_COUNT = Math.round(ALL_POSTS_NUMBER / PAGE_SIZE);

  if (ALL_POSTS && PAGE_NUMBER <= PAGE_COUNT) {
    return { ALL_POSTS, PAGE_NUMBER, PAGE_SIZE, PAGE_COUNT };
  }

  throw error(404, "Not found");
}) satisfies PageServerLoad;
