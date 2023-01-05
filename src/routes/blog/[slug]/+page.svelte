<script lang="ts">
  import Pen_ico from "$lib/assets/pen-ico.svg";
  import Date_ico from "$lib/assets/calendar.svg";
  import Image from "$lib/components/Image.svelte";
  import { fade } from "svelte/transition";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { convertDate } from "$lib/functions/convertDate";
  import type { BlogItem } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import { PortableText } from "@portabletext/svelte";
  const pageSettings: IPageSettings = getContext("pageSettings");

  export let data: any;
  const { post }: { post: BlogItem } = data;
</script>

<svelte:head>
  {#if post?.seoTitle}
    <title>{post.seoTitle}</title>
    <meta property="og:title" content={post.seoTitle} />
  {:else}
    <title>{post.title}</title>
    <meta property="og:title" content={post.title} />
  {/if}
  {#if post?.seoDesc}
    <meta name="description" content={post.seoDesc} />
  {:else if post.body}
    <meta name="description" content={post.short_desc} />
  {/if}
  {#if post?.seoKeywords}
    <meta name="keywords" content={post.seoKeywords} />
  {/if}
</svelte:head>

<BreadCrumbs
  data={{
    heading: post.title,
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Blog Page",
        path: "/blog",
        class: "text-black hover:text-blue-700",
      },
      2: { name: post.title, class: "text-shop-pink" },
    },
  }}
/>

<div class="container" in:fade>
  <div class="py-4 md:py-24">
    <div class="mb-8 md:mb-16">
      {#if post.main_image}
        <Image
          imageSrc={post.main_image}
          altText={post.title}
          className={"w-full md:h-[453px] object-cover m-auto"}
        />
      {/if}
      <div class="flex py-3 md:py-6">
        <div class="flex mr-7">
          <img class="w-[16px]" src={Pen_ico} alt="decorative" />
          <div
            style:color={pageSettings?.linkColor?.hex &&
              pageSettings.linkColor.hex}
            class="relative text-sm leading-4 text-shop-off-blue ml-2 py-1 px-6"
          >
            <span class="relative z-10">{post.author.name}</span>
            <div
              style:background-color={pageSettings?.bgMainColor1?.hex &&
                pageSettings.bgMainColor1.hex}
              style:opacity="0.15"
              style:top="0"
              style:left="0"
              class="absolute w-full h-full"
            />
          </div>
        </div>
        <div class="flex">
          <img class="w-[16px]" src={Date_ico} alt="decorative" />
          <div
            style:color={pageSettings?.linkColor?.hex &&
              pageSettings.linkColor.hex}
            class="relative text-sm leading-4 text-shop-off-blue ml-2 py-1 px-3 md:px-6"
          >
            <span class="relative z-10">{convertDate(post.publishedAt)}</span>
            <div
              style:background-color={pageSettings?.bgMainColor2?.hex &&
                pageSettings.bgMainColor2.hex}
              style:opacity="0.5"
              style:top="0"
              style:left="0"
              class="absolute w-full h-full"
            />
          </div>
        </div>
      </div>
      {#if post.body}
        <div
          class="rich-block"
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
        >
          <PortableText value={post.body} />
        </div>
      {/if}
    </div>
  </div>
</div>
