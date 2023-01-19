<script lang="ts">
  import { fade } from "svelte/transition";
  import Image from "$lib/components/Image.svelte";
  import type { AddToCartType, IProduct } from "$lib/interfaces/interface";
  import { productsInCart } from "$lib/cartStore";
  import Tab1 from "./tabs/Tab1.svelte";
  import Tab2 from "./tabs/Tab2.svelte";
  import Tab3 from "./tabs/Tab3.svelte";
  import Tabs from "./tabs/Tabs.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let product: IProduct;

  let items = [
    {
      label: "Description",
      value: 1,
      component: Tab1,
      productName: product.name,
      fullDesc: product.body,
      shortDesc: product.short_desc,
    },
    {
      label: "Features",
      value: 2,
      component: Tab2,
      productFeatures: product.features[0],
    },
    { label: "Reviews", value: 3, component: Tab3 },
  ];

  let addedStatus: boolean = false;
  export const addToCart: AddToCartType = (product) => {
    let cartArray = $productsInCart ? $productsInCart : [];

    for (let item of cartArray) {
      if (item.code === product.code && item.quantity) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
        $productsInCart = cartArray;
        addedStatus = true;
        return;
      }
    }
    addedStatus = true;
    product.quantity = 1;
    product.total = product.price;
    $productsInCart = [...cartArray, product];
  };
</script>

<div itemscope itemtype="https://schema.org/Product">
  <div
    class="grid gap-8 grid-cols-1 md:grid-cols-2 shadow-product my-16 md:my-32 p-3"
    style="box-shadow: 0px 0px 25px 10px #F6F4FD;"
    in:fade
  >
    <div>
      <Image
        imageSrc={product.main_image
          ? product.main_image
          : "/images/no-image.png"}
        altText={product.name}
        className={"w-[375px] m-auto"}
        itemprop="image"
      />
    </div>
    <div
      itemprop="offers"
      itemscope
      itemtype="https://schema.org/Offer"
      class="md:py-12 text-center md:text-left"
    >
      <h1
        itemprop="name"
        style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
        class="text-shop-off-blue text-4xl mb-2.5"
      >
        {product.name}
      </h1>
      <div class="text-base py-2.5">
        <span
          style:color={pageSettings?.linkColor?.hex &&
            pageSettings.linkColor.hex}
          class="text-3xl"
        >
          <meta itemprop="priceCurrency" content="USD" />
          <span itemprop="price" content={product.price}>${product.price}</span>
          <link itemprop="availability" href="https://schema.org/InStock" />
        </span>
        {#if product.old_price}
          <span class="text-shop-pink line-through ml-2"
            >${product.old_price}</span
          >
        {/if}
      </div>
      {#if product.short_desc}
        <div
          itemprop="description"
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="text-shop-purple-light"
        >
          {product.short_desc}
        </div>
      {/if}
      <div class="my-2.5">
        {#if !addedStatus}
          <button
            style:background-color={pageSettings?.buttonBgColor?.hex &&
              pageSettings.buttonBgColor.hex}
            style:color={pageSettings?.buttonTextColor?.hex &&
              pageSettings.buttonTextColor.hex}
            on:click={() => addToCart(product)}
            class="text-shop-navy-blue mr-2.5 border border-current px-4 py-2 hover:bg-[#151875] w-[150px] hover:text-white"
            >Add To Cart</button
          >
        {:else}
          <a
            style:background-color={pageSettings?.buttonBgColor?.hex &&
              pageSettings.buttonBgColor.hex}
            style:color={pageSettings?.buttonTextColor?.hex &&
              pageSettings.buttonTextColor.hex}
            href="/shoping-cart"
            class="text-shop-navy-blue mr-2.5 border block border-current px-4 py-2 hover:bg-[#151875] w-[150px] text-center hover:text-white"
            >Go To Cart</a
          >
        {/if}
      </div>
    </div>
  </div>
  <div class="bg-[#F9F8FE] py-10 md:py-20 px-[15px] mb-16 md:mb-32">
    <Tabs {items} />
  </div>
</div>
{#if product.related}
  <h2
    class="text-3xl text-shop-off-blue font-semibold text-center md:text-left"
  >
    Related Products
  </h2>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 pt-4 pb-20"
  >
    {#each product.related as item (item.code)}
      <a
        class="product__item transition duration-150 ease-linear text-shop-navy-blue text-center md:text-left"
        href="/products/{item.code}"
        on:click={() => (window.location.href = `/products/${item.code}`)}
      >
        <Image
          imageSrc={item.main_image ? item.main_image : "/images/no-image.png"}
          altText={item.name}
          className={"h-[316px] object-contain m-auto"}
        />
        <div class="my-4 px-3">{item.name}</div>
        <div class="px-3">${item.price}</div>
      </a>
    {/each}
  </div>
{/if}
