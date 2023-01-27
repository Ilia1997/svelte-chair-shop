<script lang="ts">
  import type { IPageSettings } from "$lib/interfaces/interface";
  export let getSelectedSort: string;
  export let currentPage: number;
  export let pageSettings: IPageSettings;
  export let filter: string;
  if (
    filter === "undefined" ||
    filter === "&undefined" ||
    filter === "" ||
    filter === undefined
  )
    filter = "";
  // console.log(getSelectedSort);
</script>

<div>
  <span
    style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    class="mr-4">Sort:</span
  >
  {#if getSelectedSort.includes("by-name")}
    <a
      class="opacity-50 pointer-events-none cursor-text"
      data-sveltekit-reload
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="?page={currentPage}&sort=by-name{filter}">By Name</a
    >
    <span class="mx-2">|</span>
    <a
      data-sveltekit-reload
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="?page={currentPage}&sort=by-price{filter}">By Price</a
    >
  {:else if getSelectedSort.includes("by-price")}
    <a
      data-sveltekit-reload
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="?page={currentPage}&sort=by-name{filter}">By Name</a
    >
    <span class="mx-2">|</span>
    <a
      class="opacity-50 pointer-events-none cursor-text"
      data-sveltekit-reload
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="?page={currentPage}&sort=by-price{filter}">By Price</a
    >
  {:else}
    <a
      data-sveltekit-reload
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="?page={currentPage}&sort=by-name{filter}">By Name</a
    >
    <span class="mx-2">|</span>
    <a
      data-sveltekit-reload
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="?page={currentPage}&sort=by-price{filter}">By Price</a
    >
  {/if}
</div>
