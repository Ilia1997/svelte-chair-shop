<script lang="ts">
  import { fade } from "svelte/transition";
  import Image from "$lib/components/Image.svelte";
  export let data: any;
  console.log(data);
</script>

<svelte:head>
  {#if data[0].seoTitle}
    <title>{data[0].seoTitle}</title>
    <meta property="og:title" content={data[0].seoTitle} />
  {:else}
    <title>{data[0].name}</title>
    <meta property="og:title" content={data[0].name} />
  {/if}
  {#if data[0].seoDesc}
    <meta name="description" content={data[0].seoDesc} />
  {:else if data[0].body}
    <meta name="description" content={data[0].body[0].children[0].text} />
  {/if}
  {#if data[0].seoKeywords}
    <meta name="keywords" content={data[0].seoKeywords} />
  {/if}
</svelte:head>

<div
  class="grid gap-8 grid-cols-1 md:grid-cols-2 shadow-product my-32 p-3"
  style="box-shadow: 0px 0px 25px 10px #F6F4FD;"
  in:fade
>
  <div>
    <Image
      imageSrc={data[0].main_image
        ? data[0].main_image
        : "/images/no-image.png"}
      altText={data[0].name}
      className={"w-[375px]"}
    />
  </div>
  <div class="py-12">
    <h1 class="text-shop-off-blue text-4xl mb-2.5">{data[0].name}</h1>
    <div class="text-base mb-2.5">
      <span>${data[0].price}</span>
      {#if data[0].old_price}
        <span class="text-shop-pink">${data[0].old_price}</span>
      {/if}
    </div>
    {#if data[0].body}
      <div class="text-shop-purple-light">
        {data[0].body[0].children[0].text}
      </div>
    {/if}
    <div class="mb-2.5 mt-8">
      <button class="text-shop-navy-blue mx-2.5">Add To Cart</button>
      <button class="mx-2.5">Add To Wishlist</button>
    </div>
  </div>
</div>
