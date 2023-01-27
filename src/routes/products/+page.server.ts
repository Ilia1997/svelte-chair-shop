import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import client from "../../sanityClient";

export const load: PageServerLoad = (async ({url}) => {
  // Setting: Items per page
  const PAGE_SIZE: number = 8;
  // get page params from URL
  const PAGE: string = url.search || "?page=1";
  // get sort type
  const SORT: string = `&${url.search.split('&')[1]}` || "";
  const SORT_BY_NAME: string = "name";
  const SORT_BY_PRICE: string = "price";
  // get filters
  const FILTER: string = `${url.search}` || "";
  let setFilterQuery = FILTER.split('&filter='); 
  let filterQueryStr: string[] = [];
  for (let i = 0; i < setFilterQuery.length; i++) {
    if(setFilterQuery[i].includes('?page=') || setFilterQuery[i].includes('&sort=')) {
      continue;
    }
    filterQueryStr.push(setFilterQuery[i]);
  }
  // get number of page from params
  // @ts-ignore
  const PAGE_NUMBER: any = PAGE.match(/\d+/)[0]
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
  }`
  // query: from .. to
   let queryProductsPerPage = `*[_type == 'products'] {
      _id, code, is_sale, sale, slug, main_image, name, old_price, price, categories[]->{title}, features[]-> {
        brand[0]->{brand},
        type[0]->{type},
        color,
        size,
        warranty,
      }, available_quantity
    } | order(${SORT === "&sort=by-name" ? SORT_BY_NAME : SORT === "&sort=by-price" ? SORT_BY_PRICE : '_id'})[${STARTFROM}..-1]`;
  
  // get posts
  const PRODUCTS_FEATURES = await client.fetch(queryProductsFeatures);
  const ALL_PRODUCTS_FEATURES = await client.fetch(queryAllFeatures);
  let productsPerPage = await client.fetch(queryProductsPerPage);
  const allProducts = PRODUCTS_FEATURES;
  let preparedFilters: string[] = [];

  // console.log(filterQueryStr)
  
  if(filterQueryStr.length) {
    productsPerPage = productsPerPage.filter((item: any) => {
        for (let i = 0; i < filterQueryStr.length; i++) {
          // @ts-ignore
          if (JSON.stringify(item.features).toString().replaceAll('"','').includes(filterQueryStr[i])) {
            return item; 
          }
        }
      });
      //prepare correct filter params for frontend
      preparedFilters = filterQueryStr.map((element, index) => {
        return `&filter=${element}`;
      });
  }
  if(preparedFilters.length) {
    // @ts-ignore
    preparedFilters = preparedFilters.join('');
  }
  // get posts quantity
  const ALL_POSTS_NUMBER = filterQueryStr.length === 0 ? allProducts.length : productsPerPage.length;
  // get pages quantity
  let pageCount = Math.round(ALL_POSTS_NUMBER / PAGE_SIZE);
  if(ALL_POSTS_NUMBER < PAGE_SIZE) {
    pageCount = 1;
  }
  
  console.log(productsPerPage)
  if (productsPerPage && PAGE_NUMBER <= pageCount) {
    return { productsPerPage, ALL_PRODUCTS_FEATURES, PAGE_SIZE, pageCount, PAGE_NUMBER, SORT, preparedFilters };
  }

  throw error(404, "Not found");
}) satisfies PageServerLoad;
