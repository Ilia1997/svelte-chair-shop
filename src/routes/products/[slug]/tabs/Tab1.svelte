<script>
  import { PortableText } from "@portabletext/svelte";
</script>

<h2 class="text-shop-navy-blue">Full description</h2>
{#if $$props.fullDesc}
  <PortableText value={$$props.fullDesc} />
{:else if $$props.shortDesc}
  <p>{$$props.shortDesc}</p>
{:else}
  <p>{$$props.productName}</p>
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
