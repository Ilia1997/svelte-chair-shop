<script lang="ts">
  import Banner from "$lib/assets/banner2.png";
  import Banner2 from "$lib/assets/banner3.png";
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  export let trendingProducts: Array<IProduct>;
</script>

<div
  class="grid lg:grid-cols-[1fr_1fr_277px] md:grid-cols-2 grid-col-1 gap-6 mt-10"
>
  <div
    class="w-full h-5 bg-[#FFF6FB] min-h-[270px] py-8 px-6 relative shadow-base"
  >
    <div class="text-[26px] text-shop-off-blue leading-8">
      23% off in all products
    </div>
    <a
      href="#"
      class="underline underline-offset-1 text-shop-pink hover:text-shop-purple block mt-2.5"
      >Shop Now</a
    >
    <img src={Banner} class="absolute bottom-0 right-0 max-w-[213px]" alt="" />
  </div>
  <div
    class="w-full h-5 bg-[#EEEFFB] min-h-[270px] py-8 px-6 relative shadow-base"
  >
    <div class="text-[26px] text-shop-off-blue leading-8">
      23% off in all products
    </div>
    <a
      href="#"
      class="underline underline-offset-1 text-shop-pink hover:text-shop-purple block mt-2.5"
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
            <span class="text-shop-navy-blue">{product.name}</span>
            <span class="text-xs text-shop-navy-blue line-through"
              >${product.old_price}</span
            >
          </div>
        </a>
      {/if}
    {/each}
  </div>
</div>
