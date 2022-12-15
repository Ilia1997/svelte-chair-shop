import type { PageLoad } from "./$types";
import client from "../../../sanityClient";

export const load: PageLoad = async ({ data, params }) => {
		const queryProduct = `*[_type == "products" && code == "${params.slug}"]`;

    let product = await client.fetch(queryProduct);
    if (product) {
      return product;
    }
  if (data) {
    return data;
  }
};
