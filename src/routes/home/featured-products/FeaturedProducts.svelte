<script lang="ts">
  import { onMount } from "svelte";
  //@ts-ignore
  import Swiper from "swiper/swiper-bundle.esm.js";
  import "swiper/css";
  import "swiper/css/pagination";

  import type { AddToCartType, IProduct } from "$lib/interfaces/interface";
  import FeaturedItem from "./FeaturedItem.svelte";
  import ModalSlot from "$lib/components/modals/ModalSlot.svelte";
  import Image from "$lib/components/Image.svelte";

  let productGalleryModal: boolean = false;
  let selectedProductImage: string = "";

  export let featuredProducts: Array<IProduct>;
  export let addToCart: AddToCartType = () => {};

  onMount(() => {
    const swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        paginationType: "custom",
        renderBullet: function () {
          return `<span class="dot swiper-pagination-bullet"></span>`;
        },
      },
    });
  });
</script>

<div class="pt-[129px] pb-20">
  <h2 class="pb-12 text-center">Featured Products</h2>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper pb-16">
      <div class="swiper-slide">
        <div
          class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-7"
        >
          {#each featuredProducts as product, index}
            {#if index <= 3}
              <FeaturedItem
                {addToCart}
                {product}
                bind:selectedProductImage
                bind:productGalleryModal
              />
            {/if}
          {/each}
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7"
        >
          {#each featuredProducts as product, index}
            {#if index > 3 && index <= 7}
              <FeaturedItem
                {addToCart}
                {product}
                bind:selectedProductImage
                bind:productGalleryModal
              />
            {/if}
          {/each}
        </div>
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</div>
{#if productGalleryModal}
  <ModalSlot
    onCloseModal={() => {
      productGalleryModal = false;
    }}
  >
    <div class="flex items-center justify-center">
      <Image
        imageSrc={selectedProductImage
          ? selectedProductImage
          : "/images/no-image.png"}
        className={"w-[500px]"}
      />
    </div>
  </ModalSlot>
{/if}

<style>
  :global(.swiper-pagination-bullet) {
    border-radius: 10px;
    background: #febad7;
    width: 16px;
    height: 4px;
    transition: all ease 0.3s;
  }
  :global(.swiper-pagination-bullet-active) {
    background: #fb2e86;
    width: 24px;
  }
</style>
