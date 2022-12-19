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
  <div class="py-24 flex items-center justify-between">
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
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 pb-20"
  >
    {#each allProducts as product (product.code)}
      <div
        in:fade
        class="product__item transition duration-150 ease-linear text-center overflow-hidden"
      >
        <a href="/products/{product.slug.current}">
          <Image
            imageSrc={product.main_image}
            altText={product.name}
            className={"w-full h-[200px] py-[30px] px-[25px] object-contain m-auto bg-[#F6F7FB]"}
          />
          <div class="my-4">{product.name}</div>
          <div class="mb-4">
            <span>${product.price}</span>
            {#if product.old_price}
              <span class="text-shop-pink line-through"
                >${product.old_price}</span
              >
            {/if}
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .product__item:hover {
    transform: scale(0.95, 0.95);
  }
</style>
