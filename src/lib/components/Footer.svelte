<script lang="ts">
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import Image from "./Image.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
</script>

<div>
  <div
    style:background-color={pageSettings?.bgMainColor2?.hex &&
      pageSettings.bgMainColor2.hex}
    class="bg-[#EEEFFB]"
  >
    <div class="container py-[96px]">
      <div
        class="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-[400px_1fr_1fr_1fr]"
      >
        <div>
          <div
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-black text-4xl font-bold"
          >
            {#if pageSettings}
              <Image
                imageSrc={pageSettings?.logotype}
                altText={pageSettings?.name}
                className={"min-w-[200px] object-contain"}
              />
            {:else}
              WarmDevs
            {/if}
          </div>

          <form
            action="{$page.url.origin}?/subscribe"
            method="POST"
            use:enhance
            class="relative w-full max-w-[377px] mt-8"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              class="px-5 py-3 outline-0 rounded-md bg-white w-full font-lato"
            />
            <button
              style:background-color={pageSettings?.buttonBgColor?.hex &&
                pageSettings.buttonBgColor.hex}
              style:color={pageSettings?.buttonTextColor?.hex &&
                pageSettings.buttonTextColor.hex}
              type="submit"
              class="border border-current absolute top-1/2 -translate-y-1/2 right-[4px] text-[#EEEFFB] text-base bg-shop-pink hover:bg-shop-purple rounded-[3px] leading-5 font-lato px-10 py-2.5"
              >Sign Up</button
            >
          </form>
          <div
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-base leading-5 text-shop-sub-text font-normal font-lato mt-6"
          >
            <div>{pageSettings?.address}</div>
          </div>
        </div>
        <div>
          <div
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-[22px] leading-[26px] text-black mb-10"
          >
            Products
          </div>
          <ul
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-shop-sub-text text-base leading-5 font-lato font-normal list-none"
          >
            <li class="mb-5 last:mb-0">
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/products"
                class="hover:text-shop-purple">Products</a
              >
            </li>
          </ul>
        </div>
        <div>
          <div
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-[22px] leading-[26px] text-black mb-10"
          >
            Blog
          </div>
          <ul
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-shop-sub-text text-base leading-5 font-lato font-normal list-none"
          >
            <li class="mb-5 last:mb-0">
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/blog"
                class="hover:text-shop-purple">Blog</a
              >
            </li>
          </ul>
        </div>
        <div>
          <div
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-[22px] leading-[26px] text-black mb-10"
          >
            Additional info
          </div>
          <ul
            style:color={pageSettings?.textColor?.hex &&
              pageSettings.textColor.hex}
            class="text-shop-sub-text text-base leading-5 font-lato font-normal list-none"
          >
            <li class="mb-5 last:mb-0">
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/static/about"
                class="hover:text-shop-purple">About Us</a
              >
            </li>
            <li class="mb-5 last:mb-0">
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/static/contacts"
                class="hover:text-shop-purple">Contacts</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    style:background-color={pageSettings?.bgMainColor1?.hex &&
      pageSettings.bgMainColor1.hex}
    class="bg-[#E7E4F8]"
  >
    <div
      class="container max-w-[960px] flex place-content-between py-4 text-white"
    >
      <span>©{pageSettings?.name} - All Rights Reserved</span>
      <div class="w-[80px] flex justify-between">
        <a
          style:color={pageSettings?.linkColor?.hex &&
            pageSettings.linkColor.hex}
          href="#"
          class="group"
        >
          <div
            class="rounded-full bg-shop-off-blue flex place-content-center w-5 h-5 group-hover:bg-shop-purple"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-1.5"
              ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                fill="#fff"
              /></svg
            >
          </div></a
        >
        <a
          style:color={pageSettings?.linkColor?.hex &&
            pageSettings.linkColor.hex}
          href="#"
          class="group"
        >
          <div
            class="rounded-full bg-shop-off-blue flex place-content-center w-5 h-5 group-hover:bg-shop-purple"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-2.5"
              ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                fill="#fff"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              /></svg
            >
          </div>
        </a>
        <a
          style:color={pageSettings?.linkColor?.hex &&
            pageSettings.linkColor.hex}
          href="#"
          class="group"
        >
          <div
            class="rounded-full bg-shop-off-blue flex place-content-center w-5 h-5 group-hover:bg-shop-purple"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-2.5"
              ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                fill="#fff"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              /></svg
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
