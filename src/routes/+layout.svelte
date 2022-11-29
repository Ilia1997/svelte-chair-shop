<script type="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  import "./app.css";
</script>

<TopBar />
<Header />
<slot />
<Footer />
