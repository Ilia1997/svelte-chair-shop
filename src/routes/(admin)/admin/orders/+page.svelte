<script lang="ts">
   import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
   import type { PageData } from "./$types";
   import Table from "$lib/components/admin/tables/Table.svelte";
   import { convertDate } from "$lib/functions/convertDate";

   export let data: PageData;
   const breadCrumbsData = {
      heading: "Orders",
      li: {
         0: { name: "Orders", path: "/admin/orders" },
      },
   };

   const { orders } = data;
   let orderWithReadeableDate: Array<any> = [];

   if (orders) {
      orderWithReadeableDate = orders.map((order) => {
         order.created_at = convertDate(order.created_at);
         return order;
      });
   }
   console.log("🚀 ~ file: +page.svelte:17 ~ orderWithReadeableDate", orderWithReadeableDate);

   console.log("🚀 ~ file: +page.svelte:15 ~ orders", orders);
</script>

<AdminNavbar {breadCrumbsData} />
<Table
   data={orderWithReadeableDate}
   columnsArray={[
      { columnName: "id", accessor: "id" },
      { columnName: "Email", accessor: "email" },
      { columnName: "Is confirmed", accessor: "is_confirmed" },
      { columnName: "Total", accessor: "total_sum" },
      { columnName: "Created at", accessor: "created_at" },
   ]}
   clickable={true}
   editable={false}
   clickableMainPath="orders"
   tableName={"Orders"}
/>

