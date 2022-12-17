<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { fade } from "svelte/transition";
  import type { IProduct } from "$lib/interfaces/interface";

  export let data: any;
  let { allProducts }: { allProducts: Array<IProduct> } = data;
</script>

<BreadCrumbs
  data={{
    heading: "Products",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Products",
        path: "/products",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>

<div class="container">
  <div class="pt-24 flex items-center justify-between">
    <h2 class="text-2xl font-josefin text-shop-off-blue leading-8">Chairs</h2>
    <div>
      Sort by <select
        name="sort"
        id=""
        class="px-2 py-1 border rounded-md border-shop-off-blue"
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  </div>
  <div class="container">
    {#each allProducts as product (product.code)}
      <div in:fade>
        <a href="/products/{product.slug.current}">
          <Image
            imageSrc={product.main_image}
            altText={product.name}
            className={"w-[148px]"}
          />
          <div>{product.name}</div>
        </a>
      </div>
    {/each}
  </div>
</div>
