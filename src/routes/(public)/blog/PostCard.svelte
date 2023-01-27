<script lang="ts">
  import Pen_ico from "$lib/assets/pen-ico.svg";
  import Date_ico from "$lib/assets/calendar.svg";
  import type { BlogCard } from "$lib/interfaces/interface";
  import Image from "$lib/components/Image.svelte";
  import { convertDate } from "$lib/functions/convertDate";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let post: BlogCard;
</script>

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
        style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
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
        style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
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
  <div
    style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    class="text-2xl pb-3 md:pb-6"
  >
    {post.title}
  </div>
  {#if post.short_desc}
    <p style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}>
      {post.short_desc}
    </p>
  {/if}
  <div class="mt-3 md:mt-7">
    <a
      class="text-lg"
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="/blog/{post.slug.current}"
      >Read more <span style:color="red">•</span></a
    >
  </div>
</div>
