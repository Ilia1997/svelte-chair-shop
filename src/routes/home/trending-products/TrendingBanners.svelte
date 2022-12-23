<script lang="ts">
  import Banner from "$lib/assets/banner2.png";
  import Banner2 from "$lib/assets/banner3.png";
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let trendingProducts: Array<IProduct>;
</script>

<div
  class="grid lg:grid-cols-[1fr_1fr_277px] md:grid-cols-2 grid-col-1 gap-6 mt-10"
>
  <div
    style:background-color={pageSettings?.bgMainColor2?.hex &&
      pageSettings.bgMainColor2.hex}
    class="w-full h-5 bg-[#FFF6FB] min-h-[270px] py-8 px-6 relative shadow-base"
  >
    <div
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="text-[26px] text-shop-off-blue leading-8"
    >
      23% off in all products
    </div>
    <a
      style:background-color={pageSettings?.buttonBgColor?.hex &&
        pageSettings.buttonBgColor.hex}
      style:color={pageSettings?.buttonTextColor?.hex &&
        pageSettings.buttonTextColor.hex}
      href="#"
      class="border border-current text-shop-pink hover:text-shop-purple block mt-2.5 py-2 px-4 w-[max-content]"
      >Shop Now</a
    >
    <img src={Banner} class="absolute bottom-0 right-0 max-w-[213px]" alt="" />
  </div>
  <div
    style:background-color={pageSettings?.bgMainColor2?.hex &&
      pageSettings.bgMainColor2.hex}
    class="w-full h-5 bg-[#EEEFFB] min-h-[270px] py-8 px-6 relative shadow-base"
  >
    <div
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="text-[26px] text-shop-off-blue leading-8"
    >
      23% off in all products
    </div>
    <a
      style:background-color={pageSettings?.buttonBgColor?.hex &&
        pageSettings.buttonBgColor.hex}
      style:color={pageSettings?.buttonTextColor?.hex &&
        pageSettings.buttonTextColor.hex}
      href="#"
      class="border border-current text-shop-pink hover:text-shop-purple block mt-2.5 py-2 px-4 w-[max-content]"
      >View Collection</a
    >
    <img src={Banner2} class="absolute bottom-0 right-1 max-w-[312px]" alt="" />
  </div>
  <div>
    {#each trendingProducts as product, index}
      {#if index < 3}
        <a href="#" class="flex gap-[10px] mb-5 last:mb-0">
          <div
            class="bg-[#F5F6F8] w-[107px] min-h-[74px] flex items-center justify-center"
          >
            <Image
              imageSrc={product.main_image
                ? product.main_image
                : "/images/no-image.png"}
              className="h-[74px]"
            />
          </div>
          <div class="flex flex-col justify-center">
            <span
              style:color={pageSettings?.textHeadingColor?.hex &&
                pageSettings.textHeadingColor.hex}
              class="text-shop-navy-blue">{product.name}</span
            >
            <span class="text-xs text-shop-red line-through"
              >${product.old_price}</span
            >
          </div>
        </a>
      {/if}
    {/each}
  </div>
</div>
