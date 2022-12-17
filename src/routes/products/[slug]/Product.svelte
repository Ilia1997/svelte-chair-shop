<script lang="ts">
  import { fade } from "svelte/transition";
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  export let product: IProduct;
</script>

<div
  class="grid gap-8 grid-cols-1 md:grid-cols-2 shadow-product my-32 p-3"
  style="box-shadow: 0px 0px 25px 10px #F6F4FD;"
  in:fade
>
  <div>
    <Image
      imageSrc={product.main_image
        ? product.main_image
        : "/images/no-image.png"}
      altText={product.name}
      className={"w-[375px]"}
    />
  </div>
  <div class="py-12">
    <h1 class="text-shop-off-blue text-4xl mb-2.5">{product.name}</h1>
    <div class="text-base mb-2.5">
      <span>${product.price}</span>
      {#if product.old_price}
        <span class="text-shop-pink">${product.old_price}</span>
      {/if}
    </div>
    {#if product.body}
      <div class="text-shop-purple-light">
        {product.body[0].children[0].text}
      </div>
    {/if}
    <div class="mb-2.5 mt-8">
      <button class="text-shop-navy-blue mx-2.5">Add To Cart</button>
      <button class="mx-2.5">Add To Wishlist</button>
    </div>
  </div>
</div>
