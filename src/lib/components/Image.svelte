<script lang="ts">
  export let altText: string = "";
  export let imageSrc: any;
  export let className: string;
  //@ts-ignore
  import imageUrlBuilder from "@sanity/image-url";
  import client from "../../sanityClient";

  function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }
</script>

<img
  src={urlFor(imageSrc).fit("max").auto("format")}
  class={className}
  alt={altText}
/>
