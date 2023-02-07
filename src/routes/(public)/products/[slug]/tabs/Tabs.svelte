<script lang="ts">
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let items: any = [];
  export let activeTabValue: number = 1;

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<ul class="flex justify-between sm:gap-6 mb-8 md:mb-10 max-w-[265px]">
  {#each items as item}
    <li
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="{activeTabValue === item.value
        ? 'active cursor-text underline pointer-events-none opacity-50'
        : 'cursor-pointer hover:opacity-70'} text-lg sm:text-2xl text-shop-off-blue"
    >
      <span on:click={handleClick(item.value)}>{item.label}</span>
    </li>
  {/each}
</ul>
{#each items as item}
  {#if activeTabValue == item.value}
    <div class="box" in:fade>
      <svelte:component
        this={item.component}
        productName={item.productName}
        fullDesc={item.fullDesc}
        shortDesc={item.shortDesc}
        productFeatures={item.productFeatures}
        productReviews={item.productReviews}
      />
    </div>
  {/if}
{/each}
