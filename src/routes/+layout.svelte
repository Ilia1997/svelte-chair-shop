<script type="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  import { page } from "$app/stores";
  import "./app.css";
  console.log($page);
</script>

<svelte:head>
  <link rel="canonical" href={$page.url.href} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:image" content="/images/logo.svg" />
</svelte:head>

<TopBar />
<Header />
<slot />
<Footer />
