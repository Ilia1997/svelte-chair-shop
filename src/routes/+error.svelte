<script lang="ts">
  import { page } from "$app/stores";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
</script>

<BreadCrumbs
  data={{
    heading: `${$page.status} ${$page.error?.message}`,
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: { name: $page.error?.message, class: "text-shop-pink" },
    },
  }}
/>
<div
  style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
  class="container pb-20 text-center"
>
  {#if $page.status == 404}
    <img alt={$page.error?.message} src="/images/404.webp" />
  {/if}
  <p class="mb-4 text-2xl">ooPs! {$page.error?.message}</p>
  <a
    style:color={pageSettings?.buttonTextColor?.hex &&
      pageSettings.buttonTextColor.hex}
    style:background-color={pageSettings?.buttonBgColor?.hex &&
      pageSettings.buttonBgColor.hex}
    href="/"
    class="px-10 py-2.5">Back To Home</a
  >
</div>

<style>
  img {
    max-height: 644px;
    margin: auto;
  }
</style>
