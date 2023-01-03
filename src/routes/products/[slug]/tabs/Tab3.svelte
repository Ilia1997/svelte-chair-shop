<script lang="ts">
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
</script>

<h2
  style:color={pageSettings?.textHeadingColor?.hex &&
    pageSettings.textHeadingColor.hex}
  class="text-shop-navy-blue"
>
  All reviews
</h2>
<p style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}>
  Reviews: Coming soon!
</p>
