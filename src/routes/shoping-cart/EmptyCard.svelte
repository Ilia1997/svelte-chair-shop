<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import EmptyCartImage from "$lib/assets/empty-cart.jpg";
  import { browser } from "$app/environment";
  export let productLength: number;
</script>

<div
  class="my-7 p-12 w-full max-w-lg mx-auto  items-center justify-center bg-white shadow-base {productLength ===
    0 && browser
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
