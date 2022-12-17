<script type="ts">
  import Icon from "@iconify/svelte";
  let menuToggle: boolean = false;
</script>

<div class="w-full">
  <div class="container flex justify-between py-5 mx-auto items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class=" lg:hidden block w-8 h-5 cursor-pointer"
      on:click={() => {
        menuToggle = true;
      }}
    >
      <div class="w-8 h-0.5 bg-black" />
      <div class="w-8 h-0.5 bg-black my-1.5" />
      <div class="w-8 h-0.5 bg-black" />
    </div>
    <div
      class="md:max-w-[500px] lg:translate-x-0 lg:transition-none  transition-transform duration-500 lg:p-0 flex {menuToggle
        ? '-translate-x-0 '
        : '-translate-x-[100%] '}
        justify-between items-center lg:static fixed top-0 left-0 right-0 bottom-0 bg-white z-10 p-10 w-full"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="absolute lg:hidden block top-5 right-5 w-7 h-7 cursor-pointer hover:scale-105 transition-all"
        on:click={() => {
          menuToggle = false;
        }}
      >
        <div class="w-0.5 h-7 bg-black -rotate-45 absolute top-0 rounded-sm" />
        <div class="w-0.5 h-7 bg-black rotate-45 absolute  top-0 rounded-sm" />
      </div>
      <div class="text-black text-4xl font-bold">Hekto</div>
      <nav class="px-8 ml-16">
        <ul class="list-none flex gap-9 flex-col lg:flex-row">
          <li>
            <a
              href="/"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/products"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Products</a
            >
          </li>
          <li>
            <a
              href="/blog"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/shop"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Shop</a
            >
          </li>
          <li>
            <a
              href="/contact"
              class="font-lato text-base leading-5 hover:text-shop-pink duration-150"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>

    <form class="relative w-full sm:w-[317px] ml-10">
      <input
        type="text"
        name="serch"
        class="outline-0 sm:w-[317px] w-full h-[40px] border-2  border-gray-100 focus:border-shop-blue px-4 py-2"
      />
      <button
        type="submit"
        class="bg-shop-pink absolute right-0 w-[51px] h-[40px]"
      >
        <div class="flex justify-center">
          <Icon
            icon="material-symbols:search-rounded"
            width="24"
            color="white"
          />
        </div>
      </button>
    </form>
  </div>
</div>
