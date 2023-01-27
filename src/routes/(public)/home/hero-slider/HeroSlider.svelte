<script lang="ts">
  import { onMount } from "svelte";
  import ProuctImage1 from "$lib/assets/prod1.png";
  import ProuctImage2 from "$lib/assets/prod-2.png";
  import ProuctImage3 from "$lib/assets/prod-3.png";
  import SliderItem from "./SliderItem.svelte";
  import type { ISlides } from "$lib/interfaces/interface";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let heroSliderProducts;

  let Carousel: any;
  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });

  let items: Array<ISlides> = [
    // {
    //   title: "Best Furniture For Your Castle....",
    //   heading: "New Furniture CollectionTrends in 2020",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    //   link: "#",
    //   sale: 25,
    //   image: ProuctImage1,
    // },
    // {
    //   title: "Best Furniture For Your Castle....",
    //   heading: "New Furniture CollectionTrends in 2022",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    //   link: "#",
    //   sale: 50,
    //   image: ProuctImage2,
    // },
    // {
    //   title: "Best Furniture For Your Castle....",
    //   heading: "New Furniture CollectionTrends in 2021",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    //   link: "#",
    //   sale: 30,
    //   image: ProuctImage3,
    // },
  ];
  heroSliderProducts.forEach((element: any) => {
    items = [
      ...items,
      {
        title: "Best Furniture For Your Castle....",
        heading: "New Furniture CollectionTrends in 2020",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        sale: element.sale,
        isSale: element.is_sale,
        link: element.slug,
        image: element.main_image,
      },
    ];
  });
</script>

<div
  style:background-color={pageSettings?.bgMainColor2?.hex &&
    pageSettings.bgMainColor2.hex}
  class="bg-shop-off-purple-white pb-12 sm:min-h-[764px] min-h-max relative"
>
  <svelte:component
    this={Carousel}
    arrows={false}
    let:currentPageIndex
    let:pagesCount
    let:showPage
  >
    {#each items as item}
      <SliderItem data={item} />
    {/each}

    <div slot="dots" class="flex my-2">
      {#each Array.from(Array(pagesCount).keys()) as element, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          style:border-color={pageSettings?.buttonBgColor?.hex &&
            pageSettings.buttonBgColor.hex}
          class="border-2 border-shop-pink rotate-45 w-[10px] h-[10px] mx-2 hover:bg-shop-pink transition-all cursor-pointer {currentPageIndex ===
          i
            ? 'bg-shop-pink'
            : ''}"
          on:click={() => {
            showPage(i);
          }}
        />
      {/each}
    </div>
  </svelte:component>
</div>
