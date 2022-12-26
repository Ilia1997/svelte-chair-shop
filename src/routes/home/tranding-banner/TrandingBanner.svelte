<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let bannerProduct: Array<IProduct>;
  const product: IProduct = bannerProduct[0];
</script>

<div
  style:background-color={pageSettings?.bgMainColor2?.hex &&
    pageSettings.bgMainColor2.hex}
  class="w-full bg-[#F1F0FF] pt-[97px] pb-[61px] overflow-hidden"
>
  <div class="container">
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <div class="relative">
        <div class="absolute top-0 ">
          <div
            class="tk-blob lg:w-[420px] w-[350px] z-0  -top-14"
            style="--time: 20s; --amount:1; --fill: #F5E1FC;"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
              <path
                d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"
              />
            </svg>
          </div>
        </div>
        <Image
          imageSrc={product.main_image
            ? product.main_image
            : "/images/no-image.png"}
          className="lg:max-w-[465px] max-w-[345px] relative"
          altText="banner"
        />
      </div>
      <div class="pl-[38px] mt-12 lg:mt-0">
        <h3>Unique Features Of leatest & Trending Poducts</h3>
        <ul class="pl-6 pt-7 pb-[38px]">
          <li
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-[#ACABC3] relative text-base font-medium font-lato tracking-wide before:block before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-shop-red before:-left-5 before:top-1.5"
          >
            All frames constructed with hardwood solids and laminates
          </li>
          <li
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-[#ACABC3] relative text-base font-medium font-lato tracking-wide my-3  before:block before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-shop-blue before:-left-5 before:top-1.5"
          >
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </li>
          <li
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-[#ACABC3] relative text-base font-medium font-lato tracking-wide  before:block before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-shop-green before:-left-5 before:top-1.5"
          >
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>
        <div class="flex items-center ">
          <button
            style:background-color={pageSettings?.buttonBgColor?.hex &&
              pageSettings.buttonBgColor.hex}
            style:color={pageSettings?.buttonTextColor?.hex &&
              pageSettings.buttonTextColor.hex}
            class="border border-current px-10 py-4 block text-base leading-5 text-white hover:bg-shop-purple bg-shop-pink transition-all rounded-sm "
            >Add To Cart</button
          >
          <div class="flex flex-col ml-5">
            <span
              style:color={pageSettings?.textHeadingColor?.hex &&
                pageSettings.textHeadingColor.hex}
              class="text-sm text-shop-off-blue leading-4 tracking-wide font-medium"
              >{product.name}</span
            >
            <span
              style:color={pageSettings?.linkColor?.hex &&
                pageSettings.linkColor.hex}
              class="text-sm text-shop-off-blue leading-4 font-lato font-normal mt-[3px]"
              >${product.price}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
