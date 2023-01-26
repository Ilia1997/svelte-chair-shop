<script lang="ts">
  import userInfoImage from "$lib/assets/user.png";
  import myOrdersImage from "$lib/assets/sent.png";
  import { page } from "$app/stores";
</script>

<div class="relative pr-4 h-full">
  <div class="sticky top-2 flex flex-col justify-between ">
    <div>
      <a
        data-sveltekit-preload-data
        href="/my-account/personal-data"
        class="flex items-center px-[18px] py-3 rounded-lg  transition-colors  mb-3 {$page
          .url.pathname === '/my-account/personal-data'
          ? 'bg-[#FEC2DC]'
          : 'bg-[#F4F4F4] '}"
      >
        <img src={userInfoImage} alt="" class="w-7" />
        <div class="text-sm font-lato ml-3">Personal data</div>
      </a>
      <a
        data-sveltekit-preload-data
        href="/my-account/orders"
        class="flex items-center px-[18px] py-3 rounded-lg transition-colors  {$page
          .url.pathname === '/my-account/orders'
          ? 'bg-[#FEC2DC]'
          : 'bg-[#F4F4F4] '}"
      >
        <img src={myOrdersImage} alt="" class="w-7" />
        <div class="text-sm font-lato  ml-3">My orders</div>
      </a>
    </div>
    <div>
      <form action="/logout" method="post" class="w-full ">
        <button
          class="flex items-center px-[18px] py-3 rounded-lg  transition-colors mt-3 w-full bg-[#F4F4F4]"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            height="28px"
            width="28px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 490.3 490.3"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3    s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6    c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1    C27.9,58.95,0,86.75,0,121.05z"
                />
                <path
                  d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9    c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63    C380.6,325.15,380.6,332.95,385.4,337.65z"
                />
              </g>
            </g>
          </svg>
          <div class="text-sm font-lato  ml-3">Log out</div>
        </button>
      </form>
    </div>
  </div>

  <div
    class="absolute w-[1px] h-full bg-[#A6A6A69E] opacity-60 top-0 right-0"
  />
</div>
