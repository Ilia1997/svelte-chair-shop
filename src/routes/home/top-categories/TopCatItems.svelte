<script lang="ts">
  import type { ICategory } from "$lib/interfaces/interface";

  import ProuctImage1 from "$lib/assets/chair1.png";
  import ProuctImage2 from "$lib/assets/chair2.png";
  import ProuctImage3 from "$lib/assets/chair3.png";
  import ProuctImage4 from "$lib/assets/prod-4.png";
  import TopCatItem from "./TopCatItem.svelte";

  const categories: Array<ICategory> = [
    { name: "Mini LCW Chair", image: ProuctImage1 },
    { name: "Mini LCW Chair 2", image: ProuctImage2 },
    { name: "Mini LCW Chair 3", image: ProuctImage3 },
    { name: "Mini LCW Chair 4", image: ProuctImage4 },
  ];
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
