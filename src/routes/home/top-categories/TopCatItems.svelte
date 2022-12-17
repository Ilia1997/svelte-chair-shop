<script lang="ts">
  import type { ICategory } from "$lib/interfaces/interface";

  import TopCatItem from "./TopCatItem.svelte";
  export let categories: Array<ICategory>;
</script>

<h2 class="pt-[80px] text-center text-shop-off-blue font-medium">
  Top Categories
</h2>
<div class="container">
  <div
    class="grid grid-cols-1 gap-12 md:gap-10 md:grid-cols-2 lg:grid-cols-4 mt-14"
  >
    {#each categories as category}
      <TopCatItem {category} />
    {/each}
  </div>
</div>
