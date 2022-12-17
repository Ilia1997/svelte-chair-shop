<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  export let product: IProduct;
</script>

<a
  href="/products/{product.code}"
  class="px-3 pt-3 pb-8 bg-white drop-shadow-base group"
>
  <div
    class="w-full min-h-[244px] bg-[#F5F6F8] flex items-center justify-center py-7"
  >
    <Image
      imageSrc={product.main_image
        ? product.main_image
        : "/images/no-image.png"}
      className=" group-hover:scale-105 max-h-44 transition-transform"
    />
  </div>
  <div class="flex justify-center flex-col items-center mt-4">
    <span class="font-lato text-base font-bold text-shop-off-blue"
      >{product.name}</span
    >

    <div class="flex items-center mt-2 ">
      <span class="text-shop-navy-blue text-sm">${product.price}</span><span
        class="text-xs text-shop-navy-blue opacity-30 ml-3 line-through"
        >${product.price}</span
      >
    </div>
  </div>
</a>
