<script lang="ts">
  import type { SvelteComponent } from "svelte";
  export let iconComponent: typeof SvelteComponent;
  export let itemName: string;
  export let itemValue: string;
  export let iconBgClass: string;
  export let growValue: number;
  export let growText: string;
</script>

<div
  class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
>
  <div
    class="bg-clip-border mx-4 rounded-xl overflow-hidden {iconBgClass} text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"
  >
    <svelte:component this={iconComponent} />
  </div>
  <div class="p-4 text-right">
    <p
      class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"
    >
      {itemName}
    </p>
    <h4
      class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"
    >
      {itemValue}
    </h4>
  </div>
  <div class="border-t border-blue-gray-50 p-4">
    <p
      class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"
    >
      {#if growValue > 0}
        <strong class="text-green-500">+{growValue}%</strong> {growText}
      {:else}
        <strong class="text-red-400">-{growValue}%</strong> {growText}
      {/if}
    </p>
  </div>
</div>
