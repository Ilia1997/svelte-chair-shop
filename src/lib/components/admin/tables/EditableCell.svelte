<script lang="ts">
   import type { BodyRow, DataColumn } from "svelte-headless-table";
   import EditIcon from "../VectorImages/EditIcon.svelte";
   import { toast } from "@zerodevx/svelte-toast";
   type Item = $$Generic;

   export let row: BodyRow<Item>;
   export let column: DataColumn<Item>;
   export let value: unknown;
   export let onUpdateValue: (rowDataId: string, columnId: string, newValue: unknown) => {};

   let isEditing = false;
   const oldValue = value;

   let inputElement: HTMLInputElement | undefined;
   $: if (isEditing) {
      inputElement?.focus();
   }

   const handleCancel = () => {
      isEditing = false;
      value = oldValue;
   };
   const handleSubmit = async () => {
      isEditing = false;
      console.log(oldValue);
      if (row.isData()) {
         const res = await onUpdateValue(row.dataId, column.id, value);
         if (!res) {
            value = oldValue;
            toast.push("Error", {
               theme: {
                  "--toastColor": "mintcream",
                  "--toastBackground": "rgb(139 29 59 / 80%);",
                  "--toastBarBackground": "red",
               },
            });
         } else {
            toast.push("Success!", {
               theme: {
                  "--toastColor": "mintcream",
                  "--toastBackground": "rgba(72,187,120,0.9)",
                  "--toastBarBackground": "#2F855A",
               },
            });
         }
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
