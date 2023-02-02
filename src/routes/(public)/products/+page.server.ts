// @ts-nocheck
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "$lib/sanityClient";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = (async ({ url }) => {
  if(url.search.includes('%')) {
    throw redirect(303, '/products?page=1');
  }
  // Setting: Items per page
  const PAGE_SIZE: number = 4;
  // get page params from URL
  const PAGE: string = url.search || "?page=1";
  // get sort type
  const SORT: string = `&${url.search.split("&")[1]}` || "";
  const SORT_BY_NAME: string = "name";
  const SORT_BY_PRICE: string = "price";
  // get filters
  const FILTER: string = `${url.search}` || "";
  let setFilterQuery = FILTER.split("&filter=");
  let filterQueryStr: string[] = [];
  for (let i = 0; i < setFilterQuery.length; i++) {
    if (
      setFilterQuery[i].includes("?page=") ||
      setFilterQuery[i].includes("&sort=")
    ) {
      continue;
    }
    filterQueryStr.push(setFilterQuery[i]);
  }
  // get number of page from params
  // @ts-ignore
  const PAGE_NUMBER: any = PAGE.match(/\d+/)[0];
  // set start point for query
  const STARTFROM = PAGE_SIZE * (+PAGE_NUMBER - 1);
  // query: all products + features if it possible
  const queryProductsFeatures = `*[_type == 'products'] {
    is_sale, sale, price, categories[]->{title}, features[]-> {
      brand[0]->{brand},
      type[0]->{type},
      color,
      size,
      warranty,
    },
  }`;
  //query: all features
  const queryAllFeatures = `*[_type == 'features'] {
    brand[0]->{brand},
    type[0]->{type},
    color,
    size,
    warranty,
  }`;
  // query: from .. to
  let queryProductsPerPage = `*[_type == 'products'] {
      _id, code, is_sale, sale, slug, main_image, name, old_price, price, categories[]->{title}, features[]-> {
        brand[0]->{brand},
        type[0]->{type},
        color,
        size,
        warranty,
      }, available_quantity
    } | order(${
      SORT === "&sort=by-name"
        ? SORT_BY_NAME
        : SORT === "&sort=by-price"
        ? SORT_BY_PRICE
        : "_id"
    })[${STARTFROM}..10000]`;

  // get items
  const PRODUCTS_FEATURES = await client.fetch(queryProductsFeatures);
  const ALL_PRODUCTS_FEATURES = await client.fetch(queryAllFeatures);
  const allProducts = PRODUCTS_FEATURES;
  let productsPerPage;
  let preparedFilters: string[] = [];
  let byAllQuery: string = "";
  let queryQuantity: string = "";

  if (filterQueryStr.length) {
    let byBrandChoice: string[] = [];
    let byTypeChoice: string[] = [];
    let bySizeChoice: string[] = [];
    let byColorChoice: string[] = [];
    let byWarrantyChoice: string[] = [];
    
    filterQueryStr.filter((item: any) => {
      if(item.includes('brand')){byBrandChoice.push(item.replace("brand:", ""))}
      if(item.includes('type')){byTypeChoice.push(item.replace("type:", ""))}
      if(item.includes('size')){bySizeChoice.push(item.replace("size:", ""))}
      if(item.includes('color')){byColorChoice.push(item.replace("color:", ""))}
      if(item.includes('warranty')){byWarrantyChoice.push(item.replace("warranty:", ""))}
      }
    );
    
    let queryExample = `*[_type == 'products' && references(*[_type=="features" ]._id)] | order(${
      SORT === "&sort=by-name"
        ? SORT_BY_NAME
        : SORT === "&sort=by-price"
        ? SORT_BY_PRICE
        : "_id"
    })[${STARTFROM}..10000]`;

    let queryExampleQuantity = `*[_type == 'products' && references(*[_type=="features" ]._id)] | order(${
      SORT === "&sort=by-name"
        ? SORT_BY_NAME
        : SORT === "&sort=by-price"
        ? SORT_BY_PRICE
        : "_id"
    })[0..-1]`;
    
    if(byBrandChoice.length) {
      let queryChankExample = `&& (references(*[_type=="product_brand" && _CHANGE_IT_]._id))`;
      for (let i = 0; i <= byBrandChoice.length; i++) {
        if(byBrandChoice.length > 1 && i <= byBrandChoice.length) {
          if(i == 0) {
            queryChankExample = queryChankExample.replace("&& _CHANGE_IT_", `&& brand == \"${byBrandChoice[i]}\" || _CHANGE_IT_`)
          }
          if(i == byBrandChoice.length - 1) {
            queryChankExample = queryChankExample.replace(" || _CHANGE_IT_", `|| brand == \"${byBrandChoice[i]}\"`);
          }
          else {
            queryChankExample = queryChankExample.replace("|| _CHANGE_IT_", `|| brand == \"${byBrandChoice[i]}\" || _CHANGE_IT_`);
          }
        }
        else if(byBrandChoice.length == 1) {
          queryChankExample = queryChankExample.replace("_CHANGE_IT_", `brand == \"${byBrandChoice[i]}\"`);
        }
      }
      queryExample = queryExample.replace(`[_type=="features" `, `[_type=="features" ${queryChankExample}`);
      byAllQuery = queryExample.replaceAll('-', " ");
    }
    if(byTypeChoice.length) { 
      let queryChankExample = `&& (references(*[_type=="product_type" && _CHANGE_IT_]._id))`;
      for (let i = 0; i <= byTypeChoice.length; i++) {
        if(byTypeChoice.length > 1 && i <= byTypeChoice.length) {
          if(i == 0) {
            queryChankExample = queryChankExample.replace("&& _CHANGE_IT_", `&& type == \"${byTypeChoice[i]}\" || _CHANGE_IT_`)
          }
          if(i == byTypeChoice.length - 1) {
            queryChankExample = queryChankExample.replace(" || _CHANGE_IT_", `|| type == \"${byTypeChoice[i]}\"`);
          }
          else {
            queryChankExample = queryChankExample.replace("|| _CHANGE_IT_", `|| type == \"${byTypeChoice[i]}\" || _CHANGE_IT_`);
          }
        }
        else if(byTypeChoice.length == 1) {
          queryChankExample = queryChankExample.replace("_CHANGE_IT_", `type == \"${byTypeChoice[i]}\"`);
        }
      }
      queryExample = queryExample.replace(`[_type=="features" `, `[_type=="features" ${queryChankExample}`);
      byAllQuery = queryExample.replaceAll('-', " ");
    }
    if(bySizeChoice.length) { 
      let queryChankExample = `&& (_CHANGE_IT_)`;
      for (let i = 0; i <= bySizeChoice.length; i++) {
        if(bySizeChoice.length > 1 && i <= bySizeChoice.length) {
          if(i == 0) {
            queryChankExample = queryChankExample.replace("_CHANGE_IT_", `size == \"${bySizeChoice[i]}\" || _CHANGE_IT_`)
          }
          if(i == bySizeChoice.length - 1) {
            queryChankExample = queryChankExample.replace(" || _CHANGE_IT_", ` || size == \"${bySizeChoice[i]}\" `);
          }
          else {
            queryChankExample = queryChankExample.replace("|| _CHANGE_IT_", ` || size == \"${bySizeChoice[i]}\" || _CHANGE_IT_`);
          }
        }
        else if(bySizeChoice.length == 1) {
          queryChankExample = queryChankExample.replace("_CHANGE_IT_", `size == \"${bySizeChoice[i]}\"`);
        }
      }
      queryExample = queryExample.replace(`[_type=="features" `, `[_type=="features" ${queryChankExample}`);
      byAllQuery = queryExample.replaceAll('-', " ");
    }
    if(byColorChoice.length) { 
      let queryChankExample = `&& (_CHANGE_IT_)`;
      for (let i = 0; i <= byColorChoice.length; i++) {
        if(byColorChoice.length > 1 && i <= byColorChoice.length) {
          if(i == 0) {
            queryChankExample = queryChankExample.replace("_CHANGE_IT_", `color.hex == \"#${byColorChoice[i]}\" || _CHANGE_IT_`)
          }
          if(i == byColorChoice.length - 1) {
            queryChankExample = queryChankExample.replace(" || _CHANGE_IT_", ` || color.hex == \"#${byColorChoice[i]}\" `);
          }
          else {
            queryChankExample = queryChankExample.replace("|| _CHANGE_IT_", ` || color.hex == \"#${byColorChoice[i]}\" || _CHANGE_IT_`);
          }
        }
        else if(byColorChoice.length == 1) {
          queryChankExample = queryChankExample.replace("_CHANGE_IT_", `color.hex == \"#${byColorChoice[i]}\"`);
        }
      }
      queryExample = queryExample.replace(`[_type=="features" `, `[_type=="features" ${queryChankExample}`);
      byAllQuery = queryExample.replaceAll('-', " ");
    }
    if(byWarrantyChoice.length) {
      let queryChankExample = `&& (_CHANGE_IT_)`;
      for (let i = 0; i <= byWarrantyChoice.length; i++) {
        if(byWarrantyChoice.length > 1 && i <= byWarrantyChoice.length) {
          if(i == 0) {
            queryChankExample = queryChankExample.replace("_CHANGE_IT_", `warranty == ${byWarrantyChoice[i]} || _CHANGE_IT_`)
          }
          if(i == byWarrantyChoice.length - 1) {
            queryChankExample = queryChankExample.replace(" || _CHANGE_IT_", ` || warranty == ${byWarrantyChoice[i]} `);
          }
          else {
            queryChankExample = queryChankExample.replace("|| _CHANGE_IT_", ` || warranty == ${byWarrantyChoice[i]} || _CHANGE_IT_`);
          }
        }
        else if(byWarrantyChoice.length == 1) {
          queryChankExample = queryChankExample.replace("_CHANGE_IT_", `warranty == ${byWarrantyChoice[i]}`);
        }
      }
      queryExample = queryExample.replace(`[_type=="features" `, `[_type=="features" ${queryChankExample}`);
      byAllQuery = queryExample.replaceAll('-', " ");
    }

    productsPerPage = byAllQuery?.length ? await client.fetch(byAllQuery) : await client.fetch(queryProductsPerPage);
    queryQuantity = await client.fetch(queryExampleQuantity);

    //prepare correct filter params for frontend
    preparedFilters = filterQueryStr.map((element, index) => {
      return `&filter=${element}`;
    });
  }
  else {
    productsPerPage = await client.fetch(queryProductsPerPage);
  }

  if (preparedFilters.length) {
    // @ts-ignore
    preparedFilters = preparedFilters.join("");
  }
  // get posts quantity
  const ALL_POSTS_NUMBER =
    filterQueryStr.length === 0 ? allProducts.length : queryQuantity.length;
  // get pages quantity
  let pageCount = Math.round(ALL_POSTS_NUMBER / PAGE_SIZE);
  if (ALL_POSTS_NUMBER < PAGE_SIZE) {
    pageCount = 1;
  }

  if (productsPerPage && PAGE_NUMBER <= pageCount) {
    return {
      productsPerPage,
      ALL_PRODUCTS_FEATURES,
      PAGE_SIZE,
      pageCount,
      PAGE_NUMBER,
      preparedFilters,
    };
  }

  throw error(404, "Not found");
}) satisfies PageServerLoad;