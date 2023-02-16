<script>
   import AdminSidebar from "$lib/components/admin/AdminSidebar.svelte";
</script>

<main class="min-h-screen bg-shop-blue">
   <AdminSidebar />
   <div class="p-4 xl:ml-80">
      <slot />
   </div>
</main>

<style>
</style>
