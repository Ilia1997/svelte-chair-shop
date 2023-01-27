<script lang="ts">
  import type { IProduct } from "$lib/interfaces/interface";
  import TrendingBanners from "./TrendingBanners.svelte";
  import ProductItem from "./TrandProductItem.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let trendingProducts: Array<IProduct>;
</script>

<h2
  style:color={pageSettings?.textHeadingColor?.hex &&
    pageSettings.textHeadingColor.hex}
  class="pt-[142px] text-center text-shop-off-blue font-medium"
>
  Trending Products
</h2>
<div class="container">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
    {#each trendingProducts as product, index}
      {#if index < 4}
        <ProductItem {product} />
      {/if}
    {/each}
  </div>
  <TrendingBanners {trendingProducts} />
</div>
