<script>
   import AdminSidebar from "$lib/components/admin/AdminSidebar.svelte";
   import { SvelteToast } from "@zerodevx/svelte-toast";
</script>

<main class="min-h-screen bg-shop-blue">
   <AdminSidebar />
   <div class="p-4 xl:ml-80">
      <SvelteToast />
      <slot />
   </div>
</main>

<style>
</style>
