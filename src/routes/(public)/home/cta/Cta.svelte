<script lang="ts">
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
</script>

<div
  class="pt-[174px] pb-[104px] bg-[url('/src/lib/assets/banner-bg.png')] bg-center mt-[125px]"
>
  <div class="max-w-[574px] font-semibold text-center mx-auto">
    <h3
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
    >
      Get Leatest Update By Subscribe 0ur Newslater
    </h3>
    <button
      style:background-color={pageSettings?.buttonBgColor?.hex &&
        pageSettings.buttonBgColor.hex}
      style:color={pageSettings?.buttonTextColor?.hex &&
        pageSettings.buttonTextColor.hex}
      class="border border-current px-10 py-4 block text-base leading-5 text-white hover:bg-shop-purple bg-shop-pink transition-all rounded-sm mx-auto mt-8"
      >Shop Now</button
    >
  </div>
</div>
