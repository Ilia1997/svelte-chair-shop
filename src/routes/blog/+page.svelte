<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { fade } from "svelte/transition";
  import PostCard from "./PostCard.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";

  export let data: any;

  const pageSettings: IPageSettings = getContext("pageSettings");
  const PAGE_SIZE = data?.PAGE_SIZE;
  let posts = data?.ALL_POSTS;
  let pageCount = data?.PAGE_COUNT;
  let currentPage = parseInt(data.PAGE_NUMBER);
</script>

<svelte:head>
  <title>{pageSettings.name} - Blog</title>
  <meta property="og:title" content="{pageSettings.name} - Blog" />
  <meta name="description" content="{pageSettings.name} - Blog description" />
  <meta name="keywords" content="blog, article, post, blogpost" />
</svelte:head>

<BreadCrumbs
  data={{
    heading: "Blog Page",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Blog Page",
        path: "",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>

<div class="container" in:fade>
  <div class="pt-8 pb-16 md:py-24">
    {#each posts as post, i}
      {#if i < PAGE_SIZE}
        <PostCard {post} />
      {/if}
    {/each}
    <!-- pagination -->
    <div
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      class="flex items-center"
    >
      {#key currentPage}
        <span class="mr-auto"
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
            href="?page={+currentPage - 1}"
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
            href="?page={+currentPage + 1}"
            class="ml-4 py-2 px-4">Next</a
          >
        {/if}
      {/key}
    </div>
  </div>
</div>
