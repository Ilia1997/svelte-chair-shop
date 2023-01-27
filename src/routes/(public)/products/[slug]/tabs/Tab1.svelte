<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
</script>

<h2
  style:color={pageSettings?.textHeadingColor?.hex &&
    pageSettings.textHeadingColor.hex}
  class="text-shop-navy-blue"
>
  Full description
</h2>
{#if $$props.fullDesc}
  <PortableText value={$$props.fullDesc} />
{:else if $$props.shortDesc}
  <p style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}>
    {$$props.shortDesc}
  </p>
{:else}
  <p style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}>
    {$$props.productName}
  </p>
{/if}

<style>
  :global(.box) {
    color: #a9acc6;
  }
  :global(.box p:not(:last-of-type)) {
    margin-bottom: 1rem;
  }
  :global(.box ul) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  :global(.box li) {
    list-style: inside;
    padding-left: 1rem;
  }
  :global(h2) {
    color: #3f509e;
    font-size: 1.25rem;
  }
</style>
