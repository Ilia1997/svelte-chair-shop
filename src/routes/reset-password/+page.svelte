<script lang="ts">
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
</script>

<BreadCrumbs
  data={{
    heading: "Reset password",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Reset password",
        path: "/reset-password",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>
<div class="container pb-6">
  <div class="p-12 mx-auto my-24 max-w-xl shadow-base-big">
    <h2 class="mx-auto text-3xl font-josefin font-bold  text-center">
      Reset password
    </h2>
  </div>
</div>
