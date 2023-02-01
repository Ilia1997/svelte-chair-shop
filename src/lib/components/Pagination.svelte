<script lang="ts">
  import { page } from "$app/stores";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  let productsPage = $page.url.pathname.includes("/products") && true;

  export let currentPage: number;
  export let pageCount: number;
  export let itemsOnpage: number;
  export let pageSize: number;
</script>

<div
  style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
  class="flex items-center {productsPage ? 'sm:pl-[30%]' : ''}"
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
        href={$page.url.search.replace(
          `?page=${currentPage}`,
          `?page=${+currentPage - 1}`
        )}
        class="py-2 px-4">Previous</a
      >
    {/if}
    {#if currentPage < pageCount && itemsOnpage >= pageSize}
      <a
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        data-sveltekit-reload
        href={$page.url.search.replace(
          `?page=${currentPage}`,
          `?page=${+currentPage + 1}`
        )}
        class="ml-4 py-2 px-4">Next</a
      >
    {/if}
  {/key}
</div>
