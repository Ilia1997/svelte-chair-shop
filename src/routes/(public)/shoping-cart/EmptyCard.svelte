<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import EmptyCartImage from "$lib/assets/empty-cart.jpg";
  import { browser } from "$app/environment";
  export let productLength: number;
  import SuccessPaymentImage from "$lib/assets/card/20943914.jpg";
  export let checkoutStatus;
</script>

<div
  class="my-7 p-12 w-full max-w-lg mx-auto  items-center justify-center bg-white shadow-base {productLength ===
    0 &&
  browser &&
  $checkoutStatus != 'PAID'
    ? 'flex'
    : 'hidden'}"
  in:fade
>
  <div>
    <h2 class="text-2xl font-lato text-shop-off-blue text-center">
      Cart is empty
    </h2>
    <img
      src={EmptyCartImage}
      alt="Empty Cart"
      in:scale={{ delay: 400, duration: 300 }}
      class="mt-4 w-80 h-80"
    />
    <a
      href="/products"
      class="block text-center w-full py-2.5 bg-shop-green mt-10 text-white font-bold font-lato hover:bg-shop-purple"
      >Go Shopping</a
    >
  </div>
</div>

<div
  class=" p-12 text-center bg-white shadow-base max-w-lg transition-opacity delay-100 my-6 mx-auto duration-300 {$checkoutStatus ==
  'PAID'
    ? 'opacity-100'
    : 'opacity-0 hidden'}"
>
  <h3 class="text-shop-navy-blue">Payment Succeeded!</h3>
  <img src={SuccessPaymentImage} alt="" class="max-w-full mt-10 mx-auto" />
  <a
    href="/products"
    class="block text-center w-40 mx-auto py-2.5 bg-shop-green mt-10 text-white font-bold font-lato hover:bg-shop-purple"
    >Go Shopping</a
  >
</div>
