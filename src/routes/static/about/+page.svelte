<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Image from "$lib/components/Image.svelte";
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  import { PortableText } from "@portabletext/svelte";

  export let data: any;

  const { pageInfo }: { pageInfo: any } = data;
  console.log(pageInfo);
</script>

<svelte:head>
  <title>{pageInfo?.seoTitle}</title>
  <meta name="description" content={pageInfo?.seoDesc} />
  <meta name="keywords" content={pageInfo?.seoKeywords} />
</svelte:head>

<BreadCrumbs
  data={{
    heading: "About Us",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: { name: "About Us", class: "text-shop-pink" },
    },
  }}
/>

<div class="container">
  <div class="grid sm:grid-cols-2 py-20 gap-7" in:fade>
    <Image
      imageSrc={pageInfo.main_image}
      altText={pageInfo.name}
      className={"max-h-[410px] object-contain m-auto"}
    />
    <div
      class="rich-block"
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      <PortableText value={pageInfo.body} />
      <div class="my-8">
        <a
          style:color={pageSettings?.buttonTextColor?.hex &&
            pageSettings.buttonTextColor.hex}
          style:background-color={pageSettings?.buttonBgColor?.hex &&
            pageSettings.buttonBgColor.hex}
          href="/static/contacts"
          class="px-10 py-2.5">Contact Us</a
        >
      </div>
    </div>
  </div>
  <div class="text-center pb-20">
    <h2
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="pb-5 text-center"
    >
      Our Features
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      <div class="pt-14 pb-11 px-6 shadow-md bg-white">
        <img
          src="/images/delivery.png"
          alt="delivery"
          class="m-auto mb-6 w-[65px]"
        />
        <div
          style:color={pageSettings?.textHeadingColor?.hex &&
            pageSettings.textHeadingColor.hex}
          class="text-[22px] leading-6 text-shop-off-blue mb-5"
        >
          Free Delivery
        </div>
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="text-[#1A0B5B] opacity-60 text-center"
        >
          {pageInfo.featuresDelivery}
        </p>
      </div>
      <div class="pt-14 pb-11 px-6 shadow-md bg-white">
        <img
          src="/images/cashback.png"
          alt="cashback"
          class="m-auto mb-6 w-[65px]"
        />
        <div
          style:color={pageSettings?.textHeadingColor?.hex &&
            pageSettings.textHeadingColor.hex}
          class="text-[22px] leading-6 text-shop-off-blue mb-5"
        >
          100% Cash Back
        </div>
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="text-[#1A0B5B] opacity-60 text-center"
        >
          {pageInfo.featuresCash}
        </p>
      </div>
      <div class="pt-14 pb-11 px-6 shadow-md bg-white">
        <img
          src="/images/quality.png"
          alt="quality"
          class="m-auto mb-6 w-[65px]"
        />
        <div
          style:color={pageSettings?.textHeadingColor?.hex &&
            pageSettings.textHeadingColor.hex}
          class="text-[22px] leading-6 text-shop-off-blue mb-5"
        >
          Quality Product
        </div>
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="text-[#1A0B5B] opacity-60 text-center"
        >
          {pageInfo.featuresQuality}
        </p>
      </div>
      <div class="pt-14 pb-11 px-6 shadow-md bg-white">
        <img
          src="/images/support.png"
          alt="support"
          class="m-auto mb-6 w-[65px]"
        />
        <div
          style:color={pageSettings?.textHeadingColor?.hex &&
            pageSettings.textHeadingColor.hex}
          class="text-[22px] leading-6 text-shop-off-blue mb-5"
        >
          24/7 Support
        </div>
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="text-[#1A0B5B] opacity-60 text-center"
        >
          {pageInfo.featuresSupport}
        </p>
      </div>
    </div>
  </div>
</div>
