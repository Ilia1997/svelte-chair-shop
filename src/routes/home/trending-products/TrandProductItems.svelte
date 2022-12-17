<script lang="ts">
  import type { IProduct } from "$lib/interfaces/interface";
  import ProuctImage1 from "$lib/assets/prod1.png";
  import ProuctImage2 from "$lib/assets/prod-2.png";
  import ProuctImage3 from "$lib/assets/prod-3.png";
  import ProuctImage4 from "$lib/assets/prod-4.png";
  import TrendingBanners from "./TrendingBanners.svelte";
  import ProductItem from "./TrandProductItem.svelte";
  export let trendingProducts: Array<IProduct>;
</script>

<h2 class="pt-[142px] text-center text-shop-off-blue font-medium">
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
