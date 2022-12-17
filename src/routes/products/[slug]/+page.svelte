<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  import Product from "./Product.svelte";

  export let data: any;
  const { product }: { product: IProduct } = data;
</script>

<svelte:head>
  {#if product?.seoTitle}
    <title>{product.seoTitle}</title>
    <meta property="og:title" content={product.seoTitle} />
  {:else}
    <title>{product.name}</title>
    <meta property="og:title" content={product.name} />
  {/if}
  {#if product?.seoDesc}
    <meta name="description" content={product.seoDesc} />
  {:else if product.body}
    <meta name="description" content={product.body[0].children[0].text} />
  {/if}
  {#if product?.seoKeywords}
    <meta name="keywords" content={product.seoKeywords} />
  {/if}
</svelte:head>

<BreadCrumbs
  data={{
    heading: "Product Details",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Products",
        path: "/products",
        class: "text-black hover:text-blue-700",
      },
      2: { name: "Product Details", class: "text-shop-pink" },
    },
  }}
/>

<div class="container">
  <Product {product} />
</div>
