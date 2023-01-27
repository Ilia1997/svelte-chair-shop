<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Image from "$lib/components/Image.svelte";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import { PortableText } from "@portabletext/svelte";
  import QuestionForm from "$lib/components/QuestionForm.svelte";
  import type { ActionData } from "./$types";
  import { page } from "$app/stores";
  const pageSettings: IPageSettings = getContext("pageSettings");

  export let data: any;
  export let form: ActionData;

  const { pageInfo }: { pageInfo: any } = data;
</script>

<svelte:head>
  <title>{pageInfo?.seoTitle}</title>
  <meta name="description" content={pageInfo?.seoDesc} />
  <meta name="keywords" content={pageInfo?.seoKeywords} />
</svelte:head>

<BreadCrumbs
  data={{
    heading: "Contact Us",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: { name: "Contact Us", class: "text-shop-pink" },
    },
  }}
/>

<div class="container" in:fade>
  <div class="grid sm:grid-cols-2 pt-16 pb-8 md:py-20 gap-7">
    <div
      class="rich-block"
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      <PortableText value={pageInfo.body} />
    </div>
    <div
      itemscope
      itemtype="https://schema.org/Organization"
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      {#if pageSettings?.name}
        <meta itemprop="name" content={pageSettings.name} />
      {/if}
      <h2
        style:color={pageSettings?.textHeadingColor?.hex &&
          pageSettings.textHeadingColor.hex}
      >
        Contact Way
      </h2>
      <div
        itemprop="address"
        itemscope
        itemtype="https://schema.org/PostalAddress"
        class="grid sm:grid-cols-2 gap-7 mt-4"
      >
        <div class="grid gap-7 md:block">
          <div class="flex">
            <Icon
              icon="material-symbols:phone-in-talk"
              color={pageSettings?.textColor?.hex
                ? pageSettings.textColor.hex
                : "#000"}
              width="20"
            />
            <a
              itemprop="telephone"
              class="ml-2"
              href="tel:{pageInfo?.phone ? pageInfo?.phone : ''}"
              >{pageInfo?.phone ? pageInfo?.phone : "phone"}</a
            >
          </div>
          <div class="flex">
            <Icon
              icon="ic:outline-email"
              color={pageSettings?.textColor?.hex
                ? pageSettings.textColor.hex
                : "#000"}
              width="20"
            />
            <a
              itemprop="email"
              class="ml-2"
              href="mailto:{pageInfo?.email ? pageInfo?.email : ''}"
              >{pageInfo?.email ? pageInfo?.email : "email"}</a
            >
          </div>
        </div>
        <div class="flex">
          <Icon
            icon="material-symbols:settings"
            color={pageSettings?.textColor?.hex
              ? pageSettings.textColor.hex
              : "#000"}
            width="20"
          />
          <p class="lg:max-w-[50%] ml-2">
            {pageInfo?.contactSupport ? pageInfo?.contactSupport : "Support"}
          </p>
        </div>
        <div class="flex">
          <Icon
            icon="material-symbols:location-on"
            color={pageSettings?.textColor?.hex
              ? pageSettings.textColor.hex
              : "#000"}
            width="20"
          />
          <p class="lg:max-w-[50%] ml-2" itemprop="addressLocality">
            {pageInfo?.address ? pageInfo?.address : "Address"}
          </p>
        </div>
        <div class="flex">
          <Icon
            icon="material-symbols:local-shipping"
            color={pageSettings?.textColor?.hex
              ? pageSettings.textColor.hex
              : "#000"}
            width="20"
          />
          <p class="lg:max-w-[160px] ml-2">
            {pageInfo?.contactShipping ? pageInfo?.contactShipping : "Shipping"}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid sm:grid-cols-2 pt-8 pb-16 md:py-20 gap-7">
    <div
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      <h2
        style:color={pageSettings?.textHeadingColor?.hex &&
          pageSettings.textHeadingColor.hex}
      >
        Get In Touch
      </h2>
      <p class="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
        bibendum quam.
      </p>
      <QuestionForm {form} currentUrl={$page.url.pathname} {pageSettings} />
    </div>
    <Image
      imageSrc={pageInfo.main_image}
      altText={pageInfo.name}
      className={"max-h-[410px] object-contain m-auto"}
    />
  </div>
</div>
