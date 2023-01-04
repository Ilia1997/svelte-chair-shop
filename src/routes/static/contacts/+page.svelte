<script lang="ts">
  import { enhance } from "$app/forms";
  import { slide } from "svelte/transition";
  import type { ActionData } from "./$types";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Image from "$lib/components/Image.svelte";
  import Icon from "@iconify/svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  import { PortableText } from "@portabletext/svelte";

  export let data: any;
  export let form: ActionData;
  let usernameError: any, emailError: any, subjectError: any, messageError: any;
  const resetForm = () => {
    form = null;
  };
  $: {
    usernameError = form?.error?.email || form?.error?.all;
    emailError = form?.error?.email || form?.error?.all;
    subjectError = form?.error?.email || form?.error?.all;
    messageError = form?.error?.email || form?.error?.all;
  }

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

<div class="container">
  <div class="grid sm:grid-cols-2 pt-16 pb-8 md:py-20 gap-7">
    <div
      class="rich-block"
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      <PortableText value={pageInfo.body} />
    </div>
    <div
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      <h2
        style:color={pageSettings?.textHeadingColor?.hex &&
          pageSettings.textHeadingColor.hex}
      >
        Contact Way
      </h2>
      <div class="grid sm:grid-cols-2 gap-7 mt-4">
        <div class="grid gap-7 md:block">
          <div class="flex">
            <Icon
              icon="material-symbols:phone-in-talk"
              color={pageSettings?.textColor?.hex
                ? pageSettings.textColor.hex
                : "#000"}
              width="20"
            />
            <a class="ml-2" href="tel:{pageInfo?.phone ? pageInfo?.phone : ''}"
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
          <p class="lg:max-w-[50%] ml-2">
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
      <form action="?/contacts" method="POST" use:enhance>
        <div class="md:flex justify-between">
          <div class="mb-6 md:max-w-[48%] w-full">
            <input
              type="text"
              id="username"
              name="username"
              on:focus={resetForm}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
              {usernameError
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              placeholder="Your Name*"
              required
            />
            {#if form?.error?.email}
              <p class="text-sm text-red-600 mt-1" transition:slide|local>
                {form?.error?.email}
              </p>
            {/if}
          </div>
          <div class="mb-6 md:max-w-[48%] w-full">
            <input
              type="email"
              id="email"
              name="email"
              on:focus={resetForm}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
              {emailError
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              placeholder="Your E-mail*"
              required
            />
            {#if form?.error?.email}
              <p class="text-sm text-red-600 mt-1" transition:slide|local>
                {form?.error?.email}
              </p>
            {/if}
          </div>
        </div>
        <div class="mb-6 w-full">
          <input
            type="text"
            id="subject"
            name="subject"
            on:focus={resetForm}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
            {subjectError
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Subject*"
            required
          />
          {#if form?.error?.email}
            <p class="text-sm text-red-600 mt-1" transition:slide|local>
              {form?.error?.email}
            </p>
          {/if}
        </div>
        <div class="mb-6 w-full">
          <textarea
            type="text"
            id="message"
            name="message"
            on:focus={resetForm}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[140px] 
            {messageError
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Type Your Message*"
            required
          />
          {#if form?.error?.email}
            <p class="text-sm text-red-600 mt-1" transition:slide|local>
              {form?.error?.email}
            </p>
          {/if}
        </div>
        <div>
          <button
            style:color={pageSettings?.buttonTextColor?.hex &&
              pageSettings.buttonTextColor.hex}
            style:background-color={pageSettings?.buttonBgColor?.hex &&
              pageSettings.buttonBgColor.hex}
            type="submit"
            class="w-[max-content] text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center "
            >Send Mail</button
          >
        </div>
      </form>
    </div>
    <Image
      imageSrc={pageInfo.main_image}
      altText={pageInfo.name}
      className={"max-h-[410px] object-contain m-auto"}
    />
  </div>
</div>
