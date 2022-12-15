<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Product from "./Product.svelte";

  export let data: any;
</script>

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
