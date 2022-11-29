<script lang="ts">
  import { fade } from "svelte/transition";

  export let onCloseModal: () => void;
</script>

<div
  transition:fade
  class="fixed top-0 left-0 right-0 bottom-0 bg-black/50 px-6 z-20 flex items-center"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->

  <div
    class="my-4 max-w-7xl w-full mx-auto z-20 rounded-lg bg-white p-6 min-h-[80vh] flex justify-center items-center relative"
  >
    <div
      class="absolute top-5 right-5 w-7 h-7 cursor-pointer hover:scale-105 transition-all"
      on:click={onCloseModal}
    >
      <div class="w-0.5 h-7 bg-black -rotate-45 absolute top-0 rounded-sm" />
      <div class="w-0.5 h-7 bg-black rotate-45 absolute  top-0 rounded-sm" />
    </div>
    <slot />
  </div>
</div>

<style>
</style>
