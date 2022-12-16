<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Product from "./Product.svelte";

  export let data: any;
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
  <Product {data} />
</div>
