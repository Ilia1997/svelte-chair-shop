<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import BasketIcon from "$lib/components/svg/BasketIcon.svelte";
  import ZoomIcon from "$lib/components/svg/ZoomIcon.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  export let product: IProduct;
  export let selectedProductImage: string;
  export let productGalleryModal: boolean;

  const openModal = () => {
    selectedProductImage = product.main_image;
    productGalleryModal = true;
  };
</script>

<div
  class="group/main w-full bg-[#F6F7FB] shadow-md relative flex flex-col justify-between"
>
  <div
    class="grid gap-1 grid-cols-3 absolute top-2.5 left-2.5 transition-all duration-500 group-hover/main:z-10 group-hover/main:opacity-100 opacity-0"
  >
    <div
      class="group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
    >
      <BasketIcon />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class=" group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
      on:click={openModal}
    >
      <ZoomIcon />
    </div>
  </div>
  <div class="flex justify-center pt-12 pb-3 relative rounded-sm text-white">
    <div class="h-[165px] flex items-center">
      <Image
        imageSrc={product.main_image
          ? product.main_image
          : "/images/no-image.png"}
        altText={product.name}
        className={"w-[148px]"}
      />
    </div>
    <a
      href="/products/{product.code}"
      class="text-xs absolute -bottom-9 px-3 py-2 bg-shop-green transition-all duration-500 group-hover/main:bottom-2.5 hover:bg-shop-purple"
      >View Details</a
    >
  </div>
  <div
    class="bg-white flex flex-col items-center  py-4 relative z-10 transition-colors group-hover/main:bg-shop-blue"
  >
    <div class="text-shop-pink group-hover/main:text-white transition-colors">
      {product.name}
    </div>
    <div class="w-[52px] mx-auto flex my-3 justify-between">
      <div class="w-[14px] h-1 rounded-xl bg-[#05E6B7]" />
      <div class="w-[14px] h-1 rounded-xl bg-[#F701A8]" />
      <div class="w-[14px] h-1 rounded-xl bg-[#00009D]" />
    </div>
    <div
      class="text-sm leading-4 transition-colors text-shop-off-blue mb-3 group-hover/main:text-white"
    >
      Code - {product.code}
    </div>
    <div
      class="text-sm leading-4 transition-colors text-shop-off-blue font-normal group-hover/main:text-white"
    >
      ${product.price}
    </div>
  </div>
</div>
