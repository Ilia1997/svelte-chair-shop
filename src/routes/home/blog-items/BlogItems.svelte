<script lang="ts">
  import Pen_ico from "$lib/assets/pen-ico.svg";
  import Date_ico from "$lib/assets/calendar.svg";
  import type { BlogItem } from "$lib/interfaces/interface";
  import Image from "$lib/components/Image.svelte";
  import { convertDate } from "$lib/functions/convertDate";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let latestPosts: Array<BlogItem>;
</script>

<div class="py-[96px]">
  <h2
    style:color={pageSettings?.textHeadingColor?.hex &&
      pageSettings.textHeadingColor.hex}
    class="pb-20 text-center"
  >
    Leatest Blog
  </h2>
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[53px]">
      {#each latestPosts as item}
        <a href="/blog/{item.slug.current}">
          <div class=" shadow-base rounded-md bg-white group">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="rounded-md overflow-hidden">
              <Image
                imageSrc={item.main_image
                  ? item.main_image
                  : "/images/no-image.png"}
                className="group-hover:scale-105 transition-transform w-full"
                altText="blog image"
              />
            </div>

            <div class="px-5 pb-7">
              <div class="flex pt-5 pb-7 ">
                <div class="flex">
                  <img src={Pen_ico} alt="decorative" />
                  <span
                    style:color={pageSettings?.textColor?.hex &&
                      pageSettings.textColor.hex}
                    class="text-sm leading-4 text-shop-off-blue ml-2"
                    >{item.author.name}</span
                  >
                </div>
                <div class="flex ml-7">
                  <img src={Date_ico} alt="decorative" />
                  <span
                    style:color={pageSettings?.textColor?.hex &&
                      pageSettings.textColor.hex}
                    class="text-sm leading-4 text-shop-off-blue ml-2"
                    >{convertDate(item._createdAt)}</span
                  >
                </div>
              </div>
              <div
                style:color={pageSettings?.textHeadingColor?.hex &&
                  pageSettings.textHeadingColor.hex}
                class="text-shop-off-blue text-lg leading-[21px] pb-4"
              >
                {item.title}
              </div>
              <div
                style:color={pageSettings?.textColor?.hex &&
                  pageSettings.textColor.hex}
                class="text-base text-[#72718F] leading-7 font-lato font-normal"
              >
                {item.short_desc}
              </div>
              <div
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                class="font-lato text-base leading-7 mt-3.5 text-shop-off-blue underline underline-offset-2 group-hover:text-shop-purple"
              >
                Read More
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
