<script lang="ts">
  import type { IProduct } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  export let openModal = () => {};
  import ProductItem from "./ProductItem.svelte";
  const products: Array<IProduct> = getContext("newArrivalProducts");
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
  {#each products as product}
    <ProductItem {openModal} {product} />
  {/each}
</div>
