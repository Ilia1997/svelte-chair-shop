import type { PageServerLoad } from "./$types";
import client from "../../../sanityClient";

export const load = (async ({ params }) => {
  let postId = params.slug
  const queryPost = `*[_type == "post" && slug.current == "${postId}"] { 
    slug, publishedAt, categories[]->{title}, author->, short_desc, body, main_image, title, seoTitle, seoKeywords, seoDesc
  }`;

  let post = await client.fetch(queryPost);

  if (post) {
    return { post: post[0] };
  }
}) satisfies PageServerLoad;
