<script lang="ts">
   import type { BodyRow, DataColumn } from "svelte-headless-table";
   import EditIcon from "../VectorImages/EditIcon.svelte";

   type Item = $$Generic;

   export let row: BodyRow<Item>;
   export let column: DataColumn<Item>;
   export let value: unknown;
   export let onUpdateValue: (rowDataId: string, columnId: string, newValue: unknown) => void;

   let isEditing = false;

   let inputElement: HTMLInputElement | undefined;
   $: if (isEditing) {
      inputElement?.focus();
   }

   const handleCancel = () => {
      isEditing = false;
   };
   const handleSubmit = () => {
      isEditing = false;
      if (row.isData()) {
         onUpdateValue(row.dataId, column.id, value);
      }
   };
</script>

<div>
   {#if !isEditing}
      <button
         class="appearance-none w-full text-left relative group/button"
         on:click={() => (isEditing = true)}
      >
         {value}
         <EditIcon
            className={"absolute w-3 h-3 top-1 right-0 opacity-0 group-hover/button:opacity-100 transition-opacity"}
         />
      </button>
   {:else}
      <form on:submit|preventDefault={handleSubmit}>
         <input bind:this={inputElement} type="text" bind:value />
         <button type="submit">✅</button>
         <button on:click={handleCancel}>❌</button>
      </form>
   {/if}
</div>

<style>
   form {
      display: flex;
      gap: 0.5rem;
   }

   button {
      padding: 0;
      border: none;
      background: transparent;
   }
</style>
