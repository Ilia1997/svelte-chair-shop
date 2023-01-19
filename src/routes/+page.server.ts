import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "../sanityClient";
import { AuthApiError } from "@supabase/gotrue-js";
import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  subscribe: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    const { data, error: err } = await locals.sb.from('SubscribeForm').insert({ 
      user_email: body.email,
    })
    if (err) {
      console.log(err)
      if (err instanceof AuthApiError && err.status == 500) {
        return fail(500, {
          error: {
            email: "",
            password: "",
            all: "Server error. Please try again later.",
          },
        });
      }
    }
    return { success: true };
  },
};

export const load = (async () => {
  const queryProducts = `*[_type == 'products'] {code, is_sale, sale, slug, main_image,name,old_price, price,is_hero_slide,  categories[]->{title}}`;
  const quertCategories = `*[_type == 'category'] {title,main_image,is_top,description}`;
  const queryLatestPosts = `*[_type == 'post'] {author->{name}, body, _createdAt,main_image, short_desc, slug, title }[0..2]`;

  let allProducts = await client.fetch(queryProducts);
  let categories = await client.fetch(quertCategories);
  let latestPosts = await client.fetch(queryLatestPosts);

  const heroSliderProducts = allProducts.filter((item: any) => {
    if (item.is_hero_slide) {
      return item;
    }
  });
  const bannerProduct = allProducts.filter((item: any) => {
    if (item.code === "Y523157") {
      return item;
    }
  });

  const trendingProducts = allProducts.filter((item: any) => {
    function findCategory(product: any) {
      return product?.title === "Trending";
    }
    const ifCategoryExist = item.categories.find(findCategory);

    if (ifCategoryExist) {
      return item;
    }
  });
  const bestSellersProducts = allProducts.filter((item: any) => {
    function findCategory(product: any) {
      return product?.title === "Best Seller";
    }
    const ifCategoryExist = item.categories.find(findCategory);

    if (ifCategoryExist) {
      return item;
    }
  });
  const newArrivalProducts = allProducts.filter((item: any) => {
    function findCategory(product: any) {
      return product?.title === "New Arrival";
    }
    const ifCategoryExist = item.categories.find(findCategory);

    if (ifCategoryExist) {
      return item;
    }
  });
  const featuredProducts = allProducts.filter((item: any) => {
    function findCategory(product: any) {
      return product?.title === "Featured";
    }
    const ifCategoryExist = item.categories.find(findCategory);

    if (ifCategoryExist) {
      return item;
    }
  });

  if (allProducts) {
    return {
      categories,
      heroSliderProducts,
      bannerProduct,
      trendingProducts,
      bestSellersProducts,
      newArrivalProducts,
      featuredProducts,
      latestPosts,
    };
  }

  throw error(404, "Not found");
}) satisfies PageServerLoad;
