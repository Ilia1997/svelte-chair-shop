<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { fade } from "svelte/transition";
  import type { IProduct } from "$lib/interfaces/interface";
  import BasketIcon from "$lib/components/svg/BasketIcon.svelte";
  import ZoomIcon from "$lib/components/svg/ZoomIcon.svelte";
  import ModalSlot from "$lib/components/modals/ModalSlot.svelte";
  import { onMount } from "svelte";

  export let data: any;
  export let product: IProduct;
  export let selectedProductImage: string;
  export let productGalleryModal: boolean;

  let selected: any;
  let sortBy: any;
  let { allProducts }: { allProducts: Array<IProduct> } = data;

  console.log(allProducts);

  $: allProductsForSorting = allProducts;

  onMount(async () => {
    sortBy = sessionStorage.getItem("sort");
    if (sortBy == "by-name") {
      sortByname();
    } else if (sortBy == "by-price") {
      sortByPrice();
    }
    return false;
  });

  const openModal = (currentProduct: any) => {
    selectedProductImage = currentProduct;
    productGalleryModal = true;
  };

  const checkSelection = (selectedOption: any) => {
    if (selectedOption == "name") {
      sortByname();
    } else {
      sortByPrice();
    }
    return false;
  };

  const sortByname = () => {
    sessionStorage.setItem("sort", "by-name");
    allProductsForSorting = allProductsForSorting.sort((a: any, b: any) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        if (
          parseInt(nameA.split(" ").pop()) < parseInt(nameB.split(" ").pop())
        ) {
          return -1;
        } else return 1;
      }
      if (nameA > nameB) {
        if (
          parseInt(nameA.split(" ").pop()) > parseInt(nameB.split(" ").pop())
        ) {
          return 1;
        } else return -1;
      }
      return 0;
    });
  };

  const sortByPrice = () => {
    sessionStorage.setItem("sort", "by-price");
    allProductsForSorting = allProductsForSorting.sort(
      (a: any, b: any) => a.price - b.price
    );
  };
</script>

<svelte:head>
  <title>Demo site - Products Page</title>
</svelte:head>

<BreadCrumbs
  data={{
    heading: "Products",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Products",
        path: "/products",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>

<div class="container">
  <div class="py-24 flex items-center justify-between">
    <h2 class="text-2xl font-josefin text-shop-off-blue leading-8">Products</h2>
    <div>
      Sort by <select
        name="sort"
        id=""
        class="px-2 py-1 border border-[#E7E6EF] border-shop-off-blue cursor-pointer"
        bind:value={selected}
        on:change={() => checkSelection(selected)}
      >
        <option value="default" disabled hidden
          >{sortBy == "by-name"
            ? "Name"
            : sortBy == "by-price"
            ? "Price"
            : "Not set"}</option
        >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  </div>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 pb-20"
  >
    {#key allProductsForSorting}
      {#each allProductsForSorting as product (product.code)}
        <div
          in:fade
          class="product__item transition duration-150 ease-linear text-center overflow-hidden"
        >
          <a class="group/main" href="/products/{product.slug.current}">
            <div class="relative">
              <div
                class="absolute bottom-6 left-[10px] sm:-left-[100%] transition-all duration-300 group-hover/main:z-10 group-hover/main:left-[10px]"
              >
                <div
                  class="group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
                >
                  <BasketIcon />
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  class=" mt-2 group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
                  on:click|stopPropagation|preventDefault={() =>
                    openModal(product.main_image)}
                >
                  <ZoomIcon />
                </div>
              </div>
              <Image
                imageSrc={product.main_image}
                altText={product.name}
                className={"w-full h-[200px] py-[30px] px-[25px] object-contain m-auto bg-[#F6F7FB] group-hover/main:bg-[#EBF4F3]"}
              />
            </div>
            <div class="my-4">{product.name}</div>
            <div class="mb-4">
              <span>${product.price}</span>
              {#if product.old_price}
                <span class="text-shop-pink line-through"
                  >${product.old_price}</span
                >
              {/if}
            </div>
          </a>
        </div>
      {/each}
    {/key}
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
