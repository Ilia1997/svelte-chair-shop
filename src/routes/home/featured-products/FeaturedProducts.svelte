<script lang="ts">
  import { onMount } from "svelte";
  import Swiper from "swiper/swiper-bundle.esm.js";
  import "swiper/css";
  import "swiper/css/pagination";

  import type { IProduct } from "$lib/interfaces/interface";
  import FeaturedItem from "./FeaturedItem.svelte";
  import ProuctImage1 from "$lib/assets/prod1.png";
  import ProuctImage2 from "$lib/assets/prod-2.png";
  import ProuctImage3 from "$lib/assets/prod-3.png";
  import ProuctImage4 from "$lib/assets/prod-4.png";
  import ModalSlot from "$lib/components/modals/ModalSlot.svelte";

  let productGalleryModal: boolean = false;
  let selectedProductImage: string = "";

  const featuresProducts: Array<IProduct> = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: ProuctImage1,
    },
    {
      name: "Cantilever chair 2",
      code: "Y523563",
      price: 65.0,
      image: ProuctImage2,
    },
    {
      name: "Cantilever chair 3",
      code: "Y523561",
      price: 30.0,
      image: ProuctImage3,
    },
    {
      name: "Cantilever chair 4",
      code: "Y523555",
      price: 30.0,
      image: ProuctImage4,
    },
  ];

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
          {#each featuresProducts as product}
            <FeaturedItem
              {product}
              bind:selectedProductImage
              bind:productGalleryModal
            />
          {/each}
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7"
        >
          {#each featuresProducts as product}
            <FeaturedItem
              {product}
              bind:selectedProductImage
              bind:productGalleryModal
            />
          {/each}
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7"
        >
          {#each featuresProducts as product}
            <FeaturedItem
              {product}
              bind:selectedProductImage
              bind:productGalleryModal
            />
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
      <img src={selectedProductImage} class="w-[500px]" alt="product" />
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
