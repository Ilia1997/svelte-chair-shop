<script type="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  import { page } from "$app/stores";
  import { supabaseClient } from "$lib/supabase";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import { setContext } from "svelte";
  import { urlFor } from "$lib/functions/createImage";
  export let sb_session: Session;
  console.log("🚀 ~ file: +layout.svelte:12 ~ sb_session", sb_session);
  import "./app.css";
  import type { Session } from "@supabase/supabase-js";

  const projectSettings = $page?.data?.projectSettings
    ? $page.data.projectSettings[0]
    : {};

  setContext("pageSettings", projectSettings);

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
  <meta
    property="og:image"
    content={projectSettings?.logotype
      ? urlFor(projectSettings.logotype).fit("max").auto("format")
      : ""}
  />
</svelte:head>
<div class="flex flex-col justify-between min-h-[100vh]">
  <div>
    <TopBar />
    <Header />
  </div>
  <slot />
  <Footer />
</div>
