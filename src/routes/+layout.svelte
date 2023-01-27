<script>
  import { onMount } from "svelte";
  import { supabaseClient } from "$lib/supabase";
  import { invalidate } from "$app/navigation";
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

<main>
  <slot />
</main>

<style>
</style>
