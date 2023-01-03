<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Image from "$lib/components/Image.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  import { PortableText } from "@portabletext/svelte";

  export let data: any;

  const { pageInfo }: { pageInfo: any } = data;
</script>

<svelte:head />

<BreadCrumbs
  data={{
    heading: "Contact Us",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: { name: "Contact Us", class: "text-shop-pink" },
    },
  }}
/>

<div class="container">
  <div class="grid sm:grid-cols-2 py-20 gap-7">
    <Image
      imageSrc={pageInfo.main_image}
      altText={pageInfo.name}
      className={"max-h-[410px] object-contain m-auto"}
    />
    <div
      style:color={pageSettings?.textColor?.hex && pageSettings.textColor.hex}
    >
      <PortableText value={pageInfo.body} />
    </div>
  </div>
</div>
