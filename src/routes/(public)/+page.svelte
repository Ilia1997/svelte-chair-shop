<script lang="ts">
  import "../blobz.css";
  import FeaturedProductsSlider from "./home/featured-products/FeaturedProducts.svelte";
  import HeroSlider from "./home/hero-slider/HeroSlider.svelte";
  import LatestMain from "./home/latest-products/LatestMain.svelte";
  import Shopex from "./home/shopex/Shopex.svelte";
  import TrandingBanner from "./home/tranding-banner/TrandingBanner.svelte";
  import ProductItems from "./home/trending-products/TrandProductItems.svelte";
  import TopCatItems from "./home/top-categories/TopCatItems.svelte";
  import Cta from "./home/cta/Cta.svelte";
  import BlogItems from "./home/blog-items/BlogItems.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let data: any;
</script>

<svelte:head>
  <title>{pageSettings?.seoTitle}</title>
  <meta name="description" content={pageSettings?.seoDesc} />
  <meta name="keywords" content={pageSettings?.seoKeywords} />
</svelte:head>

<HeroSlider heroSliderProducts={data.heroSliderProducts} />
<FeaturedProductsSlider featuredProducts={data.featuredProducts} />
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
