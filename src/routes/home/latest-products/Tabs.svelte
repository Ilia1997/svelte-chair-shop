<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import { setContext } from "svelte";

  import ModalSlot from "$lib/components/modals/ModalSlot.svelte";
  import type { ITabs } from "$lib/interfaces/interface";

  export let items: Array<ITabs> = [];
  export let activeTabValue = 1;
  let modalState: boolean = false;
  const modalImage: Writable<string> = writable("");

  setContext("modalImage", modalImage);

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<ul class="w-full max-w-[527px] mx-auto flex justify-between mb-16">
  {#each items as item}
    <li
      class="font-lato text-lg leading-6 hover:text-shop-pink  {activeTabValue ===
      item.value
        ? 'text-shop-pink underline underline-offset-2'
        : 'text-shop-navy-blue'}"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={handleClick(item.value)} class="cursor-pointer"
        >{item.label}</span
      >
    </li>
  {/each}
</ul>

{#each items as item}
  {#if activeTabValue == item.value}
    <div>
      <svelte:component
        this={item.component}
        openModal={() => (modalState = true)}
      />
    </div>
  {/if}
{/each}
{#if modalState}
  <ModalSlot
    onCloseModal={() => {
      modalState = false;
    }}
  >
    <img src={$modalImage} class="w-[400px]" alt="" />
  </ModalSlot>
{/if}
