<script lang="ts">
  import { page } from "$app/stores";
  import Image from "$lib/components/Image.svelte";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { fade } from "svelte/transition";
  import type { IProduct } from "$lib/interfaces/interface";
  import ZoomIcon from "$lib/components/svg/ZoomIcon.svelte";
  import ModalSlot from "$lib/components/modals/ModalSlot.svelte";
  import AddToCartBtn from "$lib/components/AddToCartBtn.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import Pagination from "$lib/components/Pagination.svelte";
  import Sort from "$lib/components/Sort.svelte";
  import Filter from "$lib/components/Filter.svelte";
  const pageSettings: IPageSettings = getContext("pageSettings");

  export let data: any;
  export let product: IProduct;
  export let selectedProductImage: string;
  export let productGalleryModal: boolean;

  const PAGE_SIZE: number = data?.PAGE_SIZE;
  let productsPerPage: any = data?.productsPerPage;
  let allFeatures: any = data?.ALL_PRODUCTS_FEATURES;
  let allProductFeatures: any = data?.PRODUCTS_FEATURES;
  let sortBy: string = data?.SORT || "";
  let filter: string = data?.preparedFilters || "";
  let pageCount: number = data?.pageCount;
  let currentPage: number = parseInt(data.PAGE_NUMBER);
  let getSelectedSort: string = $page.url.search || "";

  const openModal = (currentProduct: any) => {
    selectedProductImage = currentProduct;
    productGalleryModal = true;
  };
</script>

<svelte:head>
  <title>{pageSettings.name} - Products</title>
  <meta property="og:title" content="{pageSettings.name} - Products" />
  <meta
    name="description"
    content="{pageSettings.name} - Products description"
  />
  <meta name="keywords" content="blog, article, post, blogpost" />
</svelte:head>

<BreadCrumbs
  data={{
    heading: "Products",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Products",
        path: "",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>

<div class="container pb-16 md:pb-24">
  <div class="py-24 flex items-center justify-between">
    <h2
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="text-2xl font-josefin text-shop-off-blue leading-8"
    >
      Products
    </h2>
    <!-- sort block -->
    <Sort {getSelectedSort} {currentPage} {pageSettings} {filter} />
  </div>
  <div class="sm:flex justify-between">
    <!-- filter -->
    <Filter {currentPage} {allFeatures} />
    <div
      class="grid sm:max-w-[70%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 pb-20"
    >
      {#key productsPerPage}
        {#each productsPerPage as product, i}
          {#if i < PAGE_SIZE}
            <div
              in:fade
              class="transition duration-150 ease-linear text-center overflow-hidden"
            >
              <div class="group/main">
                <div class="relative overflow-hidden">
                  <div
                    class="absolute bottom-6 left-[10px] sm:-left-[100%] transition-all duration-300 group-hover/main:z-10 group-hover/main:left-[10px]"
                  >
                    <AddToCartBtn {product} />

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
                    className={"w-full h-[200px] py-[30px] px-[25px] object-contain m-auto bg-[#F6F7FB] group-hover/main:bg-[#EBF4F3] group-hover/main:scale-110 transition-transform duration-300"}
                  />
                </div>
                <a href="/products/{product.slug.current}">
                  <div
                    style:color={pageSettings?.textColor?.hex &&
                      pageSettings.textColor.hex}
                    class="my-4"
                  >
                    {product.name}
                  </div>
                  <div
                    style:color={pageSettings?.linkColor?.hex &&
                      pageSettings.linkColor.hex}
                    class="mb-4"
                  >
                    <span>${product.price}</span>
                    {#if product.old_price}
                      <span class="text-shop-pink line-through"
                        >${product.old_price}</span
                      >
                    {/if}
                  </div>
                </a>
              </div>
            </div>
          {/if}
        {/each}
      {/key}
    </div>
  </div>
  <!-- pagination -->
  <Pagination {currentPage} {pageCount} {sortBy} {filter} />
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
