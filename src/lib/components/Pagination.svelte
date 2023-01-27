<script lang="ts">
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");

  export let currentPage: number;
  export let pageCount: number;
  export let sortBy: string;
  export let filter: string;

  if (sortBy === "&undefined") sortBy = "";
  if (
    filter === "undefined" ||
    filter === "&undefined" ||
    filter === "" ||
    filter === undefined
  )
    filter = "";
  // console.log(pageCount);
</script>

<div
  style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
  class="flex items-center"
>
  {#key currentPage}
    <span
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
      class="mr-auto"
      >Page: <span
        style:background-color={pageSettings?.bgMainColor2?.hex &&
          pageSettings.bgMainColor2.hex}
        class="px-3 py-2 ml-2">{currentPage}</span
      ></span
    >
    {#if currentPage > 1}
      <a
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        data-sveltekit-reload
        href="?page={+currentPage - 1}{sortBy}{filter}"
        class="py-2 px-4">Previous</a
      >
    {/if}
    {#if currentPage < pageCount}
      <a
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        data-sveltekit-reload
        href="?page={+currentPage + 1}{sortBy}{filter}"
        class="ml-4 py-2 px-4">Next</a
      >
    {/if}
  {/key}
</div>
