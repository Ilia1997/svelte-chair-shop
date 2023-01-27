<script>
  import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
  import AdminSidebar from "$lib/components/admin/AdminSidebar.svelte";
</script>

<main class="min-h-screen bg-shop-blue">
  <AdminSidebar />
  <div class="p-4 xl:ml-80">
    <AdminNavbar />
    <slot />
  </div>
</main>

<style>
</style>
