<script lang="ts">
  import type { IProduct } from "$lib/interfaces/interface";
  import ProuctImage1 from "$lib/assets/prod1.png";
  import ProuctImage2 from "$lib/assets/prod-2.png";
  import ProuctImage3 from "$lib/assets/prod-3.png";
  import ProuctImage4 from "$lib/assets/prod-4.png";
  import TrendingBanners from "./TrendingBanners.svelte";
  import ProductItem from "./TrandProductItem.svelte";

  const trandingProducts: Array<IProduct> = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      oldPrice: 45.0,
      image: ProuctImage1,
    },
    {
      name: "Cantilever chair 2",
      code: "Y523563",
      price: 65.0,
      oldPrice: 75.0,
      image: ProuctImage2,
    },
    {
      name: "Cantilever chair 3",
      code: "Y523561",
      price: 30.0,
      oldPrice: 45.0,
      image: ProuctImage3,
    },
    {
      name: "Cantilever chair 2",
      code: "Y523563",
      price: 65.0,
      oldPrice: 69.0,
      isSale: false,
      image: ProuctImage4,
    },
  ];
</script>

<h2 class="pt-[142px] text-center text-shop-off-blue font-medium">
  Trending Products
</h2>
<div class="container">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
    {#each trandingProducts as product}
      <ProductItem {product} />
    {/each}
  </div>
  <TrendingBanners {trandingProducts} />
</div>
