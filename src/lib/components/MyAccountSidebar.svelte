<script lang="ts">
  import userInfoImage from "$lib/assets/user.png";
  import myOrdersImage from "$lib/assets/sent.png";
  import { page } from "$app/stores";
</script>

<div class="relative pr-4">
  <a
    href="/my-account/personal-data"
    class="flex items-center px-[18px] py-3 rounded-lg  transition-colors  mb-3 {$page
      .url.pathname === '/my-account/personal-data'
      ? 'bg-[#FEC2DC]'
      : 'bg-[#F4F4F4] '}"
  >
    <img src={userInfoImage} alt="" class="w-8" />
    <div class="text-sm font-lato ml-3">Personal data</div>
  </a>
  <a
    href="/my-account/orders"
    class="flex items-center px-[18px] py-3 rounded-lg transition-colors  {$page
      .url.pathname === '/my-account/orders'
      ? 'bg-[#FEC2DC]'
      : 'bg-[#F4F4F4] '}"
  >
    <img src={myOrdersImage} alt="" class="w-7" />
    <div class="text-sm font-lato  ml-3">My orders</div>
  </a>
  <div
    class="absolute w-[1px] h-full bg-[#A6A6A69E] opacity-60 top-0 right-0"
  />
</div>
