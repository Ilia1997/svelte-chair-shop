<script lang="ts">
   import type { PageData } from "./$types";
   import Table from "$lib/components/admin/tables/Table.svelte";
   import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
   export let data: PageData;

   const { users } = data;

   const breadCrumbsData = {
      heading: "Users",
      li: {
         0: {
            name: "Users",
            path: "/admin/users",
         },
      },
   };
</script>

<AdminNavbar {breadCrumbsData} />
<Table
   data={users}
   columnsArray={[
      { columnName: "First Name", accessor: "first_name" },
      { columnName: "Last Name", accessor: "last_name" },
      { columnName: "Phone", accessor: "phone" },
      { columnName: "Email", accessor: "email" },
   ]}
   clickable={true}
   editable={false}
   clickableMainPath="users"
   tableName={"Users"}
/>
