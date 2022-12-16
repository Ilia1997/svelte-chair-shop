<script type="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  import { page } from "$app/stores";
  import "./app.css";
  console.log($page);
</script>

<svelte:head>
  <title>Demo site</title>
  <link rel="canonical" href={$page.url.href} />
</svelte:head>

<TopBar />
<Header />
<slot />
<Footer />
