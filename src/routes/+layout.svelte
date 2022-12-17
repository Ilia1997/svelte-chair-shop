<script type="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  import { page } from "$app/stores";
  import { supabaseClient } from "$lib/supabase";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  import "./app.css";

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate("supabase:auth");
    });

    return () => {
      subscription.unsubscribe();
    };
  });
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
