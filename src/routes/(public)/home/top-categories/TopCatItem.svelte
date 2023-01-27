<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import type { ICategory } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let category: ICategory;
</script>

<div class="group justify-self-center">
  <div
    class=" shadow-base p-14 relative rounded-full max-w-[269px] max-h-[269px] "
  >
    <div
      style:background-color={pageSettings?.bgMainColor1?.hex &&
        pageSettings.bgMainColor1.hex}
      class="absolute  rounded-full top-0 bottom-0 right-0 opacity-0 transition-opacity group-hover:opacity-100
        left-0  bg-shop-purple z-0"
    />
    <div
      style:background-color={pageSettings?.bgMainColor2?.hex &&
        pageSettings.bgMainColor2.hex}
      class="absolute top-0 bottom-0 right-0 transition-all group-hover:translate-x-2  group-hover:-translate-y-2
        left-0 rounded-full bg-[#F6F7FB] z-10"
    />
    <Image
      imageSrc={category.main_image
        ? category.main_image
        : "/images/no-image.png"}
      className="w-[158px] relative z-20 transition-all group-hover:translate-x-2  group-hover:-translate-y-2"
    />

    <button
      style:background-color={pageSettings?.buttonBgColor?.hex &&
        pageSettings.buttonBgColor.hex}
      style:color={pageSettings?.buttonTextColor?.hex &&
        pageSettings.buttonTextColor.hex}
      class="border border-current text-xs absolute bottom-12 left-1/2 -translate-x-1/2 z-20 px-3 py-2 bg-shop-green rounded-sm transition-all duration-500 group-hover:visible group-hover:opacity-100 opacity-0 invisible hover:bg-shop-purple hover:text-white"
      >View Details</button
    >
  </div>

  <div
    style:color={pageSettings?.textHeadingColor?.hex &&
      pageSettings.textHeadingColor.hex}
    class="text-shop-off-blue text-xl text-center mt-6"
  >
    {category.title}
  </div>
</div>
