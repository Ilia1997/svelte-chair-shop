<script lang="ts">
  import type { IProduct } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import ProductItem from "./ProductItem.svelte";
  export let openModal = () => {};
  const products: Array<IProduct> = getContext("bestSellersProducts");
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
  {#each products as product}
    <ProductItem {openModal} {product} />
  {/each}
</div>
