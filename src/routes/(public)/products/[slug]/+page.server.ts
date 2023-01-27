import type { PageServerLoad } from "./$types";
import client from "$lib/sanityClient";

export const load = (async ({ params }) => {
  const queryProduct = `*[_type == "products" && code == "${params.slug}"] { 
    code,
    main_image,
    name,
    price,
    old_price,
    body,
    available_quantity,
    features[]-> {
      brand[0]->{brand},
      type[0]->{type},
      color,
      size,
      warranty,
    },
    "related": *[_type == "products" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..3] {
      code,
      name,
      main_image,
      price,
      available_quantity,
    }
  }`;

  let product = await client.fetch(queryProduct);

  if (product) {
    return { product: product[0] };
  }
}) satisfies PageServerLoad;
