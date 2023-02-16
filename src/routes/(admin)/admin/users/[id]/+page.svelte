<script lang="ts">
   import type { PageData } from "./$types";

   import type { IOrders } from "$lib/interfaces/interface";
   import Table from "$lib/components/admin/tables/Table.svelte";
   import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
   export let data: PageData;
   const { user, orders } = data;

   const userDataWithoutNull = user?.map((item) => {
      const values = Object.entries(item).map((mapItem) => {
         const key = mapItem[0];
         const value = mapItem[1] ? mapItem[1] : "Filed not set";
         return [key, value];
      });

      return Object.fromEntries(values);
   });

   let ordersNewArray: Array<IOrders> = [];

   if (orders) {
      ordersNewArray = orders.map((order) => {
         return { ...order, parsedProducts: JSON.parse(order.products_json) };
      });
   }
   const breadCrumbsData = {
      heading: "Users",
      li: {
         0: { name: "Users", path: "/admin/users" },
      },
   };
</script>

<AdminNavbar {breadCrumbsData} />
<a href="/admin/users" class="text-white hover:text-orange-400 p-4">Back to all users</a>
<Table
   data={userDataWithoutNull}
   columnsArray={[
      { columnName: "First Name", accessor: "first_name" },
      { columnName: "Last Name", accessor: "last_name" },
      { columnName: "Country", accessor: "country" },
      { columnName: "City", accessor: "city" },
      { columnName: "Address", accessor: "address" },
      { columnName: "Postal Code", accessor: "postal_code" },
   ]}
   clickable={false}
   editable={true}
   clickableMainPath="user"
   tableName={"User data"}
/>

<Table
   data={ordersNewArray}
   columnsArray={[
      { columnName: "Id", accessor: "id" },
      { columnName: "Email", accessor: "email" },
      { columnName: "Is confirmed", accessor: "is_confirmed" },
      { columnName: "Total", accessor: "total_sum" },
   ]}
   editable={false}
   tableName={"Orders"}
/>
