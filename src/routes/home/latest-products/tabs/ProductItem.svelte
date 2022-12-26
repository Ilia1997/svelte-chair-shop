<script lang="ts">
  import SaleImg from "$lib/assets/sale.svg";
  import Image from "$lib/components/Image.svelte";
  import ZoomIcon from "$lib/components/svg/ZoomIcon.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import AddToCartBtn from "$lib/components/AddToCartBtn.svelte";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let openModal = () => {};
  export let product: IProduct;
  const modalImage: any = getContext("modalImage");
  const openModalWithImage = () => {
    $modalImage = product.main_image;
    openModal();
  };
</script>

<div class="group/main">
  <div
    class=" bg-[#F7F7F7] h-[270px] group-hover/main:bg-transparent transition-colors flex items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute bottom-8 -left-[120%] transition-all duration-300 group-hover/main:z-10 group-hover/main:left-2.5 "
    >
      <AddToCartBtn {product} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class=" mt-2 group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
        on:click={openModalWithImage}
      >
        <ZoomIcon />
      </div>
    </div>
    {#if product.is_sale}
      <img src={SaleImg} alt="sale" class="absolute top-0 left-0" />
    {/if}
    <Image
      imageSrc={product.main_image
        ? product.main_image
        : "/images/no-image.png"}
      className={"w-[220px]"}
    />
  </div>
  <div class="flex justify-between mt-4">
    <a
      style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
      href="/products/{product.code}"
      class="text-base block leading-5 underline underline-offset-2 decoration-[#EEEFFB] text-shop-navy-blue"
      >{product.name}</a
    >
    <div class="flex items-center">
      <span
        style:color={pageSettings?.linkColor?.hex && pageSettings.linkColor.hex}
        class="text-shop-navy-blue text-sm">${product.price}</span
      >
      {#if product.old_price}
        <span class="text-xs text-shop-red ml-2 line-through"
          >${product.old_price}</span
        >
      {/if}
    </div>
  </div>
</div>
