<script type="ts">
  import Icon from "@iconify/svelte";
  import Image from "./Image.svelte";
  import { page } from "$app/stores";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");

  let menuToggle: boolean = false;
</script>

<div class="w-full">
  <div class="container flex justify-between py-5 mx-auto items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class=" lg:hidden block w-8 h-5 cursor-pointer"
      on:click={() => {
        menuToggle = true;
      }}
    >
      <div class="w-8 h-0.5 bg-black" />
      <div class="w-8 h-0.5 bg-black my-1.5" />
      <div class="w-8 h-0.5 bg-black" />
    </div>
    <div
      class="md:max-w-[500px] lg:translate-x-0 lg:transition-none  transition-transform duration-500 lg:p-0 flex {menuToggle
        ? '-translate-x-0 '
        : '-translate-x-[100%] '}
        justify-between items-center lg:static fixed top-0 left-0 right-0 bottom-0 bg-white z-10 p-10 w-full"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="absolute lg:hidden block top-5 right-5 w-7 h-7 cursor-pointer hover:scale-105 transition-all"
        on:click={() => {
          menuToggle = false;
        }}
      >
        <div class="w-0.5 h-7 bg-black -rotate-45 absolute top-0 rounded-sm" />
        <div class="w-0.5 h-7 bg-black rotate-45 absolute  top-0 rounded-sm" />
      </div>
      <div class="text-black text-4xl font-bold">
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
      <nav class="ml-[3vw]">
        <ul class="list-none flex gap-9 flex-col lg:flex-row whitespace-nowrap">
          <li>
            <a
              style:color={pageSettings?.linkColor?.hex &&
                pageSettings.linkColor.hex}
              href="/"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Home</a
            >
          </li>
          <li>
            <a
              style:color={pageSettings?.linkColor?.hex &&
                pageSettings.linkColor.hex}
              href="/products"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Products</a
            >
          </li>
          <li>
            {#if $page.route.id === "/blog"}
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/blog?page=1"
                rel="nofollow"
                class="font-lato text-base leading-5 hover:text-shop-pink duration-150 opacity-50 cursor-text pointer-events-none"
                >Blog</a
              >
            {:else}
              <a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/blog?page=1"
                class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
                >Blog</a
              >
            {/if}
          </li>
          <li>
            <a
              style:color={pageSettings?.linkColor?.hex &&
                pageSettings.linkColor.hex}
              href="/static/about"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >About Us</a
            >
          </li>
          <li>
            <a
              style:color={pageSettings?.linkColor?.hex &&
                pageSettings.linkColor.hex}
              href="/static/contacts"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Contacts</a
            >
          </li>
        </ul>
      </nav>
    </div>

    <form class="relative w-full sm:w-[317px] ml-10">
      <input
        type="text"
        name="serch"
        class="outline-0 sm:w-[317px] w-full h-[40px] border-2  border-gray-100 focus:border-black px-4 py-2"
      />
      <button
        type="submit"
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        class="bg-shop-pink absolute right-0 w-[51px] h-[40px]"
      >
        <div class="flex justify-center">
          <Icon
            icon="material-symbols:search-rounded"
            width="24"
            color="white"
          />
        </div>
      </button>
    </form>
  </div>
</div>
