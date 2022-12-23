<script>
  let featuresNames = $$props.productFeatures
    ? Object.keys($$props.productFeatures)
    : "";
  let featuresValues = $$props.productFeatures
    ? Object.values($$props.productFeatures)
    : "";
</script>

<h2 class="text-shop-navy-blue">Additional Info</h2>
{#if !$$props.productFeatures}
  <p>No features yet</p>
{:else}
  <table class="table-auto bg-white">
    <tbody>
      {#each featuresNames as name, i}
        {#if name != "color"}
          <tr>
            <td class="py-2 px-4 border text-shop-sub-text"
              >{name.toUpperCase()}</td
            >
            <td class="py-2 px-4 border"
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
