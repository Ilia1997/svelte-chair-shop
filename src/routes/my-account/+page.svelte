<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.session}
  Welcome {data.session.user.email}
{/if}
