<script lang="ts">
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let data: any;

  let liItems = data.li;
  let keys = Object.keys(liItems);
</script>

<div
  style:background-color={pageSettings?.bgMainColor2?.hex &&
    pageSettings.bgMainColor2.hex}
  class="py-8 md:pt-24 md:pb-32 w-full bg-[#F6F5FF]"
>
  <div class="container">
    <h1
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="font-josefin text-[36px] leading-[42px] text-shop-off-blue mb-2"
    >
      {data.heading}
    </h1>
    <nav class="rounded-md w-full">
      <ol class="list-reset flex">
        {#each { length: keys.length } as _, i}
          {#if liItems[i].path}
            <li>
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href={liItems[i].path}
                class={liItems[i].class}>{liItems[i].name}</a
              >
            </li>
          {:else}
            <li class="text-shop-red">{liItems[i].name}</li>
          {/if}

          {#if i < keys.length - 1}
            <li>
              <span
                style:color={pageSettings?.textColor?.hex &&
                  pageSettings.textColor.hex}
                class="text-gray-500 mx-2">/</span
              >
            </li>
          {/if}
        {/each}
      </ol>
    </nav>
  </div>
</div>
