import type { PageServerLoad } from "./$types";
import client from "../../../sanityClient";

export const load = (async ({ params }) => {
  const queryProduct = `*[_type == "products" && code == "${params.slug}"]`;

  let product = await client.fetch(queryProduct);

  if (product) {
    return { product: product[0] };
  }
}) satisfies PageServerLoad;
