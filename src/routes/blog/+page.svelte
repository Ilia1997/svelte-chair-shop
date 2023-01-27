<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { fade } from "svelte/transition";
  import PostCard from "./PostCard.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import Pagination from "$lib/components/Pagination.svelte";

  export let data: any;

  const pageSettings: IPageSettings = getContext("pageSettings");
  const PAGE_SIZE = data?.PAGE_SIZE;
  let sortBy: string = "";
  let posts = data?.ALL_POSTS;
  let pageCount = data?.pageCount;
  let currentPage = parseInt(data.PAGE_NUMBER);
  let filter: string = "";
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
    <Pagination {currentPage} {pageCount} {sortBy} {filter} />
  </div>
</div>
