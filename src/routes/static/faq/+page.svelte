<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");

  export let data: any;

  const { pageInfo }: { pageInfo: any } = data;
</script>

<svelte:head>
  <title>FAQ</title>
  <meta name="description" content="FAQ - description" />
  <meta name="keywords" content="FAQ - keywords" />
</svelte:head>

<BreadCrumbs
  data={{
    heading: "FAQ",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: { name: "FAQ", class: "text-shop-pink" },
    },
  }}
/>

<div class="container">
  <div class="grid sm:grid-cols-1 py-8 md:py-20 gap-7" in:fade>
    <div
      class=""
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      {#each pageInfo as post}
        <div class="mb-8 md:mb-16">
          <div
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2
              itemprop="name"
              class="mb-2 md:mb-4"
              style:color={pageSettings?.textHeadingColor?.hex &&
                pageSettings.textHeadingColor.hex}
            >
              {post.question}
            </h2>
          </div>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
          >
            <p
              itemprop="text"
              style:color={pageSettings?.textColor?.hex &&
                pageSettings.textColor.hex}
            >
              {post.answer}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
