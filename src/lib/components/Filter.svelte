<script lang="ts">
  import { page } from "$app/stores";
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

  //   console.log(allProductFeatures);

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
</script>

<div class="mb-4 sm:mb-8 w-full sm:max-w-[25%]">
  {#if hasBrand}
    <div class="mb-4">
      <div class="uppercase">Brand:</div>
      {#each uniqBrands as brand, i}
        <div class="capitalize">
          <a
            class={$page.url.search.includes(brand) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(brand)
              ? correctUrl.replace(`&filter=brand:${brand}`, "")
              : `${correctUrl}&filter=brand:${brand}`}>{brand}</a
          >
        </div>
      {/each}
    </div>
  {/if}
  {#if hasType}
    <div class="mb-4">
      <div class="uppercase">Type:</div>
      {#each uniqTypes as type, i}
        <div class="capitalize">
          <a
            class={$page.url.search.includes(type) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(type)
              ? correctUrl.replace(`&filter=type:${type}`, "")
              : `${correctUrl}&filter=type:${type}`}>{type}</a
          >
        </div>
      {/each}
    </div>
  {/if}
  {#if hasSize}
    <div class="mb-4">
      <div class="uppercase">Size:</div>
      {#each uniqSizes as size, i}
        <div>
          <a
            class={$page.url.search.includes(size) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(size)
              ? correctUrl.replace(`&filter=size:${size}`, "")
              : `${correctUrl}&filter=size:${size}`}>{size}</a
          >
        </div>
      {/each}
    </div>
  {/if}
  {#if hasColor}
    <div class="mb-4">
      <div class="uppercase">Color:</div>
      {#each uniqColors as color, i}
        <span>
          <a
            style="background-color: {color}; border-radius: 50%; padding: 8px; font-size: 0;"
            class={$page.url.search.includes(color.replace("#", ""))
              ? "opacity-20"
              : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(color.replace("#", ""))
              ? correctUrl.replace(`&filter=${color.replace("#", "")}`, "")
              : `${correctUrl}&filter=${color.replace("#", "")}`}
            >color:{color}</a
          >
        </span>
      {/each}
    </div>
  {/if}
  {#if hasWarranty}
    <div class="mb-4">
      <div class="uppercase">Warranty:</div>
      {#each uniqWarranties as warranty, i}
        <div class="capitalize">
          <a
            class={$page.url.search.includes(warranty) ? "opacity-50" : ""}
            data-sveltekit-reload
            href={$page.url.search.includes(warranty)
              ? correctUrl.replace(`&filter=warranty:${warranty}`, "")
              : `${correctUrl}&filter=warranty:${warranty}`}>{warranty}</a
          >
        </div>
      {/each}
    </div>
  {/if}
  <div>
    <a data-sveltekit-reload href="?page=1">Reset filters</a>
  </div>
</div>
