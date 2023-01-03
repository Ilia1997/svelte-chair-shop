<script lang="ts">
  let featuresNames = $$props.productFeatures
    ? Object.keys($$props.productFeatures)
    : "";
  let featuresValues = $$props.productFeatures
    ? Object.values($$props.productFeatures)
    : "";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
</script>

<h2
  style:color={pageSettings?.textHeadingColor?.hex &&
    pageSettings.textHeadingColor.hex}
  class="text-shop-navy-blue"
>
  Additional Info
</h2>
{#if !$$props.productFeatures}
  <p style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}>
    No features yet
  </p>
{:else}
  <table class="table-auto bg-white">
    <tbody>
      {#each featuresNames as name, i}
        {#if name != "color"}
          <tr>
            <td
              style:color={pageSettings?.textColor?.hex &&
                pageSettings.textColor.hex}
              class="py-2 px-4 border text-shop-sub-text"
              >{name.toUpperCase()}</td
            >
            <td
              style:color={pageSettings?.linkColor?.hex &&
                pageSettings.linkColor.hex}
              class="py-2 px-4 border"
              >{typeof featuresValues[i] === "object"
                ? Object.values(featuresValues[i])
                : featuresValues[i]}</td
            >
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
{/if}
