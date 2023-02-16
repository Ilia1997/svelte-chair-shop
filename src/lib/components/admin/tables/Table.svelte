<script lang="ts">
   import { error } from "@sveltejs/kit";
   import { goto } from "$app/navigation";
   import {
      createRender,
      createTable,
      Render,
      Subscribe,
      type DataLabel,
   } from "svelte-headless-table";
   import { writable } from "svelte/store";
   import { addPagination } from "svelte-headless-table/plugins";

   import EditableCell from "./EditableCell.svelte";
   export let columnsArray: Array<any>;
   export let data;
   export let tableName: string;
   export let clickable: boolean = false;
   export let editable: boolean = false;
   export let clickableMainPath: string = "";

   const clickableCallBack = (id: string) => {
      if (clickable) {
         goto(`${clickableMainPath}/${id}`);
      }
   };

   const storedData = writable(data);

   // @ts-ignore
   const updateData = async (rowDataId, columnId, newValue) => {
      // In this case, the dataId of each item is its index in $data.
      // You can also handle any server-synchronization necessary here.
      const idx = parseInt(rowDataId);

      const currentItem = $storedData[idx];

      const key = columnId; // Cast as `keyof YourDataItem`
      const newItem = { ...currentItem, [key]: newValue };

      const response = await updateUserInDB({ id: currentItem.id, [key]: newValue });
      if (response?.success) {
         $storedData[idx] = newItem;
         $storedData = $storedData;
         return true;
      } else {
         return false;
      }
      // Handle any server-synchronization.
   };
   const updateUserInDB = async (data: any) => {
      const userData = data;
      const rawResponse = await fetch("/admin/users/server/update-user", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ userData }),
      });
      const response = await rawResponse.json();
      return response;
   };

   const EditableCellLabel: DataLabel<unknown> = ({ column, row, value }) =>
      createRender(EditableCell, {
         row,
         column,
         value,
         onUpdateValue: updateData,
      });

   const table = createTable(storedData, {
      page: addPagination(),
   });

   const createColumsForTable = columnsArray.map((item) => {
      if (editable) {
         return table.column({
            header: item.columnName,
            cell: EditableCellLabel,
            accessor: item.accessor,
         });
      } else {
         return table.column({
            header: item.columnName,
            accessor: item.accessor,
         });
      }
   });

   const columns = table.createColumns(createColumsForTable);

   const { headerRows, rows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
      table.createViewModel(columns);
   const { pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage } = pluginStates.page;
   $pageSize = 4;
</script>

<div class="mt-12 mb-8 flex flex-col gap-12">
   <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div
         class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6"
      >
         <h6
            class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white"
         >
            {tableName}
         </h6>
      </div>
      <div class="overflow-x-auto p-4">
         {#if data.length != 0}
            <table
               {...$tableAttrs}
               class="w-full min-w-[300px] table-auto md:table block overflow-auto "
            >
               <thead>
                  {#each $headerRows as headerRow (headerRow.id)}
                     <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
                        <tr {...rowAttrs}>
                           {#each headerRow.cells as cell (cell.id)}
                              <Subscribe attrs={cell.attrs()} let:attrs>
                                 <th
                                    {...attrs}
                                    class="border-b border-blue-gray-50 py-3 px-5 text-left min-w-[130px]"
                                 >
                                    <p
                                       class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"
                                    >
                                       <Render of={cell.render()} />
                                    </p>
                                 </th>
                              </Subscribe>
                           {/each}
                        </tr>
                     </Subscribe>
                  {/each}
               </thead>
               <tbody {...$tableBodyAttrs}>
                  {#each $pageRows as row, index}
                     <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                        <tr
                           {...rowAttrs}
                           class=" {clickable ? 'cursor-pointer' : ''} {editable
                              ? ''
                              : 'hover:bg-gray-100/80'}"
                           on:click={() => {
                              clickableCallBack(row.original.id);
                           }}
                        >
                           {#each row.cells as cell (cell.id)}
                              <Subscribe attrs={cell.attrs()} let:attrs>
                                 <td
                                    {...attrs}
                                    class="py-3 px-5  border-blue-gray-50 {$rows.length - 1 ===
                                    index
                                       ? 'border-none'
                                       : 'border-b'} {editable ? 'hover:bg-gray-100/80' : ''}"
                                 >
                                    <p
                                       class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400 "
                                    >
                                       <Render of={cell.render()} />
                                    </p>
                                 </td>
                              </Subscribe>
                           {/each}
                        </tr>
                     </Subscribe>
                  {/each}
               </tbody>
            </table>
            {#if data.length > $pageSize}
               <div class="mt-4">
                  <button
                     class="appearance-none px-4 py-2 border-gray-300 border rounded-lg"
                     on:click={() => $pageIndex--}
                     disabled={!$hasPreviousPage}>Previous page</button
                  >
                  <span class="px-2"> {$pageIndex + 1} out of {$pageCount}</span>

                  <button
                     class="appearance-none px-4 py-2 border-gray-300 border rounded-lg"
                     on:click={() => $pageIndex++}
                     disabled={!$hasNextPage}>Next page</button
                  >
               </div>
            {/if}
         {:else}
            <h3 class="text-2xl text-center pb-5">{tableName} is empty</h3>
         {/if}
      </div>
   </div>
</div>
