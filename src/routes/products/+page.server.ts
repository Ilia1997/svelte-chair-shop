import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "../../sanityClient";

export const load = (async () => {
  const queryProducts = `*[_type == 'products'] {code, is_sale, sale, slug, main_image, name, available_quantity, old_price, price, categories[]->{title}}`;

  let allProducts = await client.fetch(queryProducts);

  if (allProducts) {
    return { allProducts };
  }

  throw error(404, "Not found");
}) satisfies PageServerLoad;
