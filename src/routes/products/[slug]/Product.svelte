<script lang="ts">
  import { fade } from "svelte/transition";
  import Image from "$lib/components/Image.svelte";
  export let data: any;
  console.log(data);
</script>

<div
  class="grid gap-8 grid-cols-1 md:grid-cols-2 shadow-product my-32 p-3"
  style="box-shadow: 0px 0px 25px 10px #F6F4FD;"
  in:fade
>
  <div>
    <Image
      imageSrc={data[0].main_image}
      altText={data[0].name}
      className={"w-[375px]"}
    />
  </div>
  <div>
    <h1 class="text-shop-off-blue text-4xl mb-2.5">{data[0].name}</h1>
    <div class="text-base">${data[0].price}</div>
  </div>
</div>
