<script lang="ts">
  import { fade } from "svelte/transition";

  import type { ISlides } from "$lib/interfaces/interface";
  export let data: ISlides;
  import Lamp from "$lib/assets/lamp.png";
</script>

<div class="w-full  flex items-center overflow-hidden" transition:fade>
  <div
    class="container flex justify-between lg:flex-row flex-col mx-auto relative lg:py-32"
  >
    <img src={Lamp} alt="Lamp" class="absolute top-0 -left-[226px]" />
    <div
      class="absolute w-[15px] h-[15px] top-[530px] -left-[190px] rounded-full bg-shop-pink"
    />
    <div class="max-w-[100%] xl:max-w-[644px] lg:max-w-[550px] lg:mt-0 pt-20">
      <div class="text-base text-shop-pink leading-7 font-lato mb-3">
        {data.title}
      </div>
      <h1>{data.heading}</h1>
      <p class="text-baseleading-7 font-lato text-gray-500 mt-3">
        {data.description}
      </p>
      <a
        href={data.link}
        class="px-10 py-4 block text-base leading-5 text-white hover:bg-shop-purple bg-shop-pink transition-all rounded-sm w-[163px] mt-7"
        >Shop Now</a
      >
    </div>
    <div
      class="lg:absolute lg:mt-0 relative mt-20 sm:w-[500px]  sm:h-[550px] w-[300px]  h-[350px] right-0"
    >
      <div
        class="absolute sm:w-[500px] w-[300px] sm:h-[500px] h-[300px] bg-[#ECD2FA] opacity-30 rounded-full -z-10"
      />
      <div
        class="absolute sm:w-[500px] w-[300px] sm:h-[500px] h-[300px] bg-[#ECD2FA] opacity-30 rounded-full -z-10 -top-[38px] sm:-right-[45px] right-auto sm:left-auto left-7"
      />
      <div
        class="absolute w-[136px] h-[136px] -top-[100px] xl:-right-[50px] sm:-right-[20px] sm:left-auto left-[220px]"
      >
        <div
          class="absolute pt-1.5 font-josefin text-3xl text-center text-white z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold"
        >
          {data.sale}% <br /> off
        </div>
        <div class="tk-blob" style="--time: 10s; --fill: #00C1FE;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
            <path
              d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"
            />
          </svg>
        </div>
      </div>

      <img
        src={data.image}
        alt=""
        class="sm:w-[500px] sm:h-[500px] w-[300px] h-[300]"
      />
    </div>
  </div>
</div>

<style>
</style>
