<script type="ts">
  import Icon from "@iconify/svelte";
</script>

<div class="bg-shop-purple w-full text-white">
  <div class="container mx-auto py-3.5 flex justify-between">
    <div class="flex ">
      <a
        href="mailto:mhhasanul@gmail.com"
        class=" text-gray-100  text-base leading-5 hover:text-cyan-400 transition-all duration-300 flex items-center"
      >
        <div class="lg:block hidden">
          <Icon icon="ic:outline-email" color="#fff" width="16" />
        </div>
        <div class="lg:hidden block">
          <Icon icon="ic:outline-email" color="#fff" width="20" />
        </div>

        <span class="ml-2.5 lg:block hidden">mhhasanul@gmail.com</span>
      </a>

      <div class="lg:ml-12 ml-2.5 flex items-center">
        <a
          href="tel:(12345)67890"
          class="flex items-center ml-2.5 text-base leading-5 text-gray-100 hover:text-cyan-400 transition-all duration-300"
        >
          <div class="lg:block hidden">
            <Icon
              icon="material-symbols:phone-in-talk"
              color="#fff"
              width="16"
            />
          </div>
          <div class="lg:hidden block">
            <Icon
              icon="material-symbols:phone-in-talk"
              color="#fff"
              width="20"
            />
          </div>

          <span class="ml-0 lg:block lg:ml-2.5 hidden">(12345)67890</span></a
        >
      </div>
    </div>
    <div class="flex ">
      <a
        href="/login"
        class="flex items-center hover:text-cyan-400 transition-all duration-300"
      >
        <span class="lg:block hidden">Login</span>

        <div class="lg:block hidden">
          <Icon icon="mdi:user-outline" color="#fff" width="18" />
        </div>
        <div class="lg:hidden block">
          <Icon icon="mdi:user-outline" color="#fff" width="24" />
        </div>
      </a>
      <a
        href="/shoping-card"
        class="ml-3 hover:text-cyan-400 transition-all duration-300"
      >
        <Icon icon="mdi:shopping-cart-outline" color="#fff" width="22" />
      </a>
    </div>
  </div>
</div>
