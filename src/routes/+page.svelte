<script lang="ts">
  import "./blobz.css";
  import FeaturedProductsSlider from "./home/featured-products/FeaturedProducts.svelte";
  import HeroSlider from "./home/hero-slider/HeroSlider.svelte";
  import LatestMain from "./home/latest-products/LatestMain.svelte";
  import Shopex from "./home/shopex/Shopex.svelte";
  import TrandingBanner from "./home/tranding-banner/TrandingBanner.svelte";
  import ProductItems from "./home/trending-products/TrandProductItems.svelte";
  import TopCatItems from "./home/top-categories/TopCatItems.svelte";
  import Cta from "./home/cta/Cta.svelte";
  import BlogItems from "./home/blog-items/BlogItems.svelte";
  export let data: any;
  import { productsInCart } from "$lib/cartStore";
  import type { AddToCartType } from "$lib/interfaces/interface";

  const addToCart: AddToCartType = (product) => {
    let cartArray = $productsInCart ? $productsInCart : [];

    for (let item of cartArray) {
      if (item.code === product.code && item.quantity) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
        $productsInCart = cartArray;
        console.log("🚀 ~ file: +page.svelte:24 ~ cartArray", cartArray);
        return;
      }
    }

    product.quantity = 1;
    product.total = product.price;
    $productsInCart = [...cartArray, product];
    console.log("🚀 ~ file: +page.svelte:32 ~ productsInCart", $productsInCart);
  };
</script>

<svelte:head>
  <title>Demo site - Home Page</title>
</svelte:head>

<HeroSlider heroSliderProducts={data.heroSliderProducts} />
<FeaturedProductsSlider featuredProducts={data.featuredProducts} {addToCart} />
<LatestMain
  newArrivalProducts={data.newArrivalProducts}
  bestSellersProducts={data.bestSellersProducts}
  featuredProducts={data.featuredProducts}
/>
<Shopex />
<TrandingBanner bannerProduct={data.bannerProduct} />
<ProductItems trendingProducts={data.trendingProducts} />
<TopCatItems categories={data.categories} />
<Cta />
<BlogItems latestPosts={data.latestPosts} />
