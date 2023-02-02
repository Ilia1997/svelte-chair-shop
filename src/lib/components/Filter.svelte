<script lang="ts">
  import { page } from "$app/stores";
  import type { IPageSettings } from "$lib/interfaces/interface";
  export let pageSettings: IPageSettings;
  export let allFeatures: any;
  export let currentPage: number;

  //brand filter settings
  let hasBrand: boolean = false;
  let brands: any = [];
  let uniqBrandsSetup: any = [];
  let uniqBrands: any = [];
  //type filter settings
  let hasType: boolean = false;
  let types: any = [];
  let uniqTypesSetup: any = [];
  let uniqTypes: any = [];
  //type filter settings
  let hasSize: boolean = false;
  let sizes: any = [];
  let uniqSizesSetup: any = [];
  let uniqSizes: any = [];
  //color filter settings
  let hasColor: boolean = false;
  let colors: any = [];
  let uniqColorSetup: any = [];
  let uniqColors: any = [];
  //warranty filter settings
  let hasWarranty: boolean = false;
  let warranties: any = [];
  let uniqWarrantySetup: any = [];
  let uniqWarranties: any = [];

  let correctUrl = $page.url.search.replace(`?page=${currentPage}`, "?page=1");

  for (let i = 0; i < allFeatures.length; i++) {
    if (allFeatures[i].brand) {
      hasBrand = true;
      brands.push(
        allFeatures[i].brand.brand.replace(" ", "-").replace('"', "")
      );

      if (i === allFeatures.length - 1) {
        uniqBrandsSetup = new Set(brands);
        uniqBrands = [...uniqBrandsSetup];
      }
    }
    if (allFeatures[i].type) {
      hasType = true;
      types.push(allFeatures[i].type.type.replace(" ", "-").replace('"', ""));

      if (i === allFeatures.length - 1) {
        uniqTypesSetup = new Set(types);
        uniqTypes = [...uniqTypesSetup];
      }
    }
    if (allFeatures[i].size) {
      hasSize = true;
      sizes.push(allFeatures[i].size.replace(" ", "-").replace('"', ""));

      if (i === allFeatures.length - 1) {
        uniqSizesSetup = new Set(sizes);
        uniqSizes = [...uniqSizesSetup];
      }
    }
    if (allFeatures[i].color) {
      hasColor = true;
      colors.push(allFeatures[i].color.hex.toString().replace(" ", "-"));

      if (i === allFeatures.length - 1) {
        uniqColorSetup = new Set(colors);
        uniqColors = [...uniqColorSetup];
      }
    }
    if (allFeatures[i].warranty) {
      hasWarranty = true;
      warranties.push(
        allFeatures[i].warranty.toString().replace(" ", "-").replace('"', "")
      );

      if (i === allFeatures.length - 1) {
        uniqWarrantySetup = new Set(warranties);
        uniqWarranties = [...uniqWarrantySetup];
      }
    }
  }

  const loadMore = (event: any) => {
    let itemsArr = [
      ...event.target.parentNode.getElementsByClassName("hidden"),
    ];
    event.target.remove();

    itemsArr.forEach((element: HTMLElement) =>
      element.classList.remove("hidden")
    );
  };
</script>

<div class="mb-4 flex flex-wrap sm:mb-8 w-full sm:max-w-[25%] sm:block">
  {#if hasBrand}
    <div class="mb-4 min-w-[50%]">
      <div class="uppercase font-bold">Brand:</div>
      <div class="pl-4 flex flex-col">
        {#each uniqBrands as brand, i}
          <a
            class:capitalize={true}
            class:block={true}
            class:w-max={true}
            class:hidden={i > 2 && !$page.url.search.includes(brand)}
            class:-order-1={$page.url.search.includes(brand)}
            class={$page.url.search.includes(brand) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(brand)
              ? correctUrl.replace(`&filter=brand:${brand}`, "")
              : `${correctUrl}&filter=brand:${brand}`}>{brand}</a
          >
        {/each}
        {#if uniqBrands.length > 2}
          <button class="w-max" on:click={loadMore}>...</button>
        {/if}
      </div>
    </div>
  {/if}
  {#if hasType}
    <div class="mb-4 min-w-[50%]">
      <div class="uppercase font-bold">Type:</div>
      <div class="pl-4 flex flex-col">
        {#each uniqTypes as type, i}
          <a
            class:capitalize={true}
            class:block={true}
            class:w-max={true}
            class:hidden={i > 2 && !$page.url.search.includes(type)}
            class:-order-1={$page.url.search.includes(type)}
            class={$page.url.search.includes(type) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(type)
              ? correctUrl.replace(`&filter=type:${type}`, "")
              : `${correctUrl}&filter=type:${type}`}>{type}</a
          >
        {/each}
        {#if uniqTypes.length > 2}
          <button class="w-max" on:click={loadMore}>...</button>
        {/if}
      </div>
    </div>
  {/if}
  {#if hasSize}
    <div class="mb-4 min-w-[50%]">
      <div class="uppercase font-bold">Size:</div>
      <div class="pl-4 flex flex-col">
        {#each uniqSizes as size, i}
          <a
            class:capitalize={true}
            class:block={true}
            class:w-max={true}
            class:hidden={i > 2 && !$page.url.search.includes(size)}
            class:-order-1={$page.url.search.includes(size)}
            class={$page.url.search.includes(size) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(size)
              ? correctUrl.replace(`&filter=size:${size}`, "")
              : `${correctUrl}&filter=size:${size}`}>{size}</a
          >
        {/each}
        {#if uniqSizes.length > 2}
          <button class="w-max" on:click={loadMore}>...</button>
        {/if}
      </div>
    </div>
  {/if}
  {#if hasColor}
    <div class="mb-4 min-w-[50%]">
      <div class="uppercase font-bold">Color:</div>
      <div class="pl-4 flex flex-wrap items-center">
        {#each uniqColors as color, i}
          <span class="mr-2 mb-2">
            <a
              style="background-color: {color}; border-radius: 50%; padding: 8px; font-size: 0;"
              class={$page.url.search.includes(
                `color:${color.replace("#", "")}`
              )
                ? "opacity-50 color-checked relative"
                : ""}
              data-sveltekit-reload
              href={$page.url.search.includes(color.replace("#", ""))
                ? correctUrl.replace(
                    `&filter=color:${color.replace("#", "")}`,
                    ""
                  )
                : `${correctUrl}&filter=color:${color.replace("#", "")}`}
              >color:{color}</a
            >
          </span>
        {/each}
      </div>
    </div>
  {/if}
  {#if hasWarranty}
    <div class="mb-4 min-w-[50%]">
      <div class="uppercase font-bold">Warranty:</div>
      {#each uniqWarranties as warranty, i}
        <div class="capitalize pl-4 flex flex-col">
          <a
            class:block={true}
            class:w-max={true}
            class:hidden={i > 2 && !$page.url.search.includes(warranty)}
            class:-order-1={$page.url.search.includes(warranty)}
            class={$page.url.search.includes(`warranty:${warranty}`)
              ? "opacity-20"
              : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(`warranty:${warranty}`)
              ? correctUrl.replace(`&filter=warranty:${warranty}`, "")
              : `${correctUrl}&filter=warranty:${warranty}`}>{warranty}</a
          >
        </div>
      {/each}
      {#if uniqWarranties.length > 2}
        <button class="ml-4 w-max" on:click={loadMore}>...</button>
      {/if}
    </div>
  {/if}
  <div class="w-full text-center sm:text-left">
    <a
      style:background-color={pageSettings?.buttonBgColor?.hex &&
        pageSettings.buttonBgColor.hex}
      style:color={pageSettings?.buttonTextColor?.hex &&
        pageSettings.buttonTextColor.hex}
      data-sveltekit-reload
      href="?page=1"
      class="py-2 px-4">Reset filters</a
    >
  </div>
</div>

<style>
  a.color-checked::before {
    content: "|";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    filter: brightness(1);
    z-index: 123;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    outline: 1px solid;
    color: red;
  }
</style>
