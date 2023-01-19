<script lang="ts">
  export let altText: string = "";
  export let imageSrc: any;
  export let className: string;
  export let itemprop: any = null;
  import { urlFor } from "$lib/functions/createImage";
</script>

<img
  src={imageSrc != "/images/no-image.png"
    ? urlFor(imageSrc).fit("max").auto("format")
    : imageSrc}
  class={className}
  alt={altText}
  itemprop={itemprop && itemprop}
/>
