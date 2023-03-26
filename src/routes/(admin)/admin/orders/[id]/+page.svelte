<script lang="ts">
   import { fade } from "svelte/transition";
   import { enhance } from "$app/forms";
   import type { PageData } from "./$types";

   import type { IOrders } from "$lib/interfaces/interface";
   import Table from "$lib/components/admin/tables/Table.svelte";
   import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
   import { writable, type Writable } from "svelte/store";
   import { toast } from "@zerodevx/svelte-toast";
   export let data: PageData;

   const { order } = data;

   let orderedProducts: Array<IOrders> = [];
   if (order) {
      orderedProducts = JSON.parse(order[0].products_json);
   }
   const orderStore: Writable<any> = writable(order);
   console.log("id", $orderStore[0].id);
   const breadCrumbsData = {
      heading: "Orders",
      li: {
         0: { name: "Orders", path: "/admin/orders" },
      },
   };
   $: console.log($orderStore[0]);
</script>

<AdminNavbar {breadCrumbsData} />
<a href="/admin/orders" class="text-white hover:text-orange-400 p-4">Back to all orders</a>
{#key $orderStore[0]}
   <Table
      data={$orderStore}
      columnsArray={[
         { columnName: "First Name", accessor: "first_name" },
         { columnName: "Last Name", accessor: "last_name" },
         { columnName: "Phone", accessor: "phone" },
         { columnName: "Country", accessor: "country" },
         { columnName: "City", accessor: "city" },
         { columnName: "Address", accessor: "address" },
         { columnName: "Postal Code", accessor: "postal_code" },
         { columnName: "Email", accessor: "email" },
         { columnName: "Is confirmed", accessor: "is_confirmed" },
      ]}
      clickable={false}
      editable={false}
      tableName={"Order data"}
   />
{/key}
<Table
   data={orderedProducts}
   columnsArray={[
      { columnName: "Code", accessor: "code" },
      { columnName: "Product name", accessor: "name" },
      { columnName: "Price", accessor: "price" },
      { columnName: "Quantity", accessor: "quantity" },
      { columnName: "Total", accessor: "total" },
   ]}
   editable={false}
   tableName={"Products"}
/>
{#if $orderStore && !$orderStore[0].is_confirmed}
   <form
      action="?/confirmOrder"
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
         return async ({ result, update }) => {
            console.log("🚀 ~ file: +page.svelte:70 ~ return ~ result:", result);
            // @ts-ignore
            if (result?.data.success == true) {
               $orderStore[0].is_confirmed = true;
               toast.push("Success!", {
                  theme: {
                     "--toastColor": "mintcream",
                     "--toastBackground": "rgba(72,187,120,0.9)",
                     "--toastBarBackground": "#2F855A",
                  },
               });
            } else {
               // @ts-ignore
               if (result?.data.error) {
                  // @ts-ignore
                  toast.push(result?.data.error, {
                     theme: {
                        "--toastColor": "mintcream",
                        "--toastBackground": "rgb(139 29 59 / 80%);",
                        "--toastBarBackground": "red",
                     },
                  });
               } else {
                  toast.push("Error", {
                     theme: {
                        "--toastColor": "mintcream",
                        "--toastBackground": "rgb(139 29 59 / 80%);",
                        "--toastBarBackground": "red",
                     },
                  });
               }
            }
         };
      }}
   >
      <input type="hidden" name="order_id" value={$orderStore[0].id} />
      <input type="hidden" name="products" value={$orderStore[0].products_json} />
      <button class="mt-4 px-6 py-3 bg-white">Confirm Order</button>
   </form>
{/if}
