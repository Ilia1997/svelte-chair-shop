<script lang="ts">
   import { enhance } from "$app/forms";
   import type { PageData } from "./$types";
   import { createTable, Render, Subscribe } from "svelte-headless-table";
   import { writable } from "svelte/store";

   export let data: PageData;
   console.log("🚀 ~ file: +page.svelte:8 ~ data", data);

   const { users } = data;
   interface userData {
      first_name: string;
      last_name: string;
      address: string;
      postal_code: string;
      phone: number;
      email: string;
      country: string;
      city: string;
      id: string;
   }

   // let usersArrayForTable: Array<userData> = [];

   // users?.forEach((item, index) => {
   //    const user = {
   //       first_name: item.first_name,
   //       last_name: item.last_name,
   //       address: item.address,
   //       postal_code: item.postal_code,
   //       phone: item.phone,
   //       email: item.email,
   //       country: item.country,
   //       city: item.city,
   //    };
   //    usersArrayForTable.push(user);
   // });
   // console.log("🚀 ~ file: +page.svelte:13 ~ usersArrayForTable", usersArrayForTable);

   const tableData = writable([
      { name: "Ada Lovelace", age: 21 },
      { name: "Barbara Liskov", age: 52 },
      { name: "Richard Hamming", age: 38 },
   ]);

   const table = createTable(writable(users));

   const columns = table.createColumns([
      table.column({
         header: "First name",
         accessor: "first_name",
      }),
      table.column({
         header: "Last Name",
         accessor: "last_name",
      }),
      table.column({
         header: "Address",
         accessor: "address",
      }),
      table.column({
         header: "Postal_code",
         accessor: "postal_code",
      }),
      table.column({
         header: "Phone",
         accessor: "phone",
      }),
      table.column({
         header: "Email",
         accessor: "email",
      }),
      table.column({
         header: "Country",
         accessor: "country",
      }),
      table.column({
         header: "City",
         accessor: "city",
      }),
   ]);

   const { headerRows, rows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="mt-12 mb-8 flex flex-col gap-12">
   <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div
         class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6"
      >
         <h6
            class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white"
         >
            Users table
         </h6>
      </div>
      <table {...$tableAttrs} class="w-full min-w-[640px] table-auto">
         <thead>
            {#each $headerRows as headerRow (headerRow.id)}
               <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
                  <tr {...rowAttrs}>
                     {#each headerRow.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs>
                           <th {...attrs} class="border-b border-blue-gray-50 py-3 px-5 text-left">
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
            {#each $rows as row, index}
               <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                  <tr {...rowAttrs}>
                     {#each row.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs>
                           <td
                              {...attrs}
                              class="py-3 px-5  border-blue-gray-50 {$rows.length - 1 === index
                                 ? 'border-none'
                                 : 'border-b'}"
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
      <!-- <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
         <table class="w-full min-w-[640px] table-auto">
            <thead
               ><tr
                  ><th class="border-b border-blue-gray-50 py-3 px-5 text-left"
                     ><p
                        class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"
                     >
                        author
                     </p></th
                  ><th class="border-b border-blue-gray-50 py-3 px-5 text-left"
                     ><p
                        class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"
                     >
                        function
                     </p></th
                  ><th class="border-b border-blue-gray-50 py-3 px-5 text-left"
                     ><p
                        class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"
                     >
                        status
                     </p></th
                  ><th class="border-b border-blue-gray-50 py-3 px-5 text-left"
                     ><p
                        class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"
                     >
                        employed
                     </p></th
                  ><th class="border-b border-blue-gray-50 py-3 px-5 text-left"
                     ><p
                        class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"
                     /></th
                  ></tr
               ></thead
            ><tbody
               ><tr
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div class="flex items-center gap-4">
                        <div>
                           <p
                              class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold"
                           >
                              John Michael
                           </p>
                           <p
                              class="block antialiased font-sans text-xs font-normal text-blue-gray-500"
                           >
                              john@creative-tim.com
                           </p>
                        </div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        Manager
                     </p>
                     <p class="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        Organization
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div
                        class="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-green-600 to-green-400 text-white py-0.5 px-2 text-[11px] font-medium"
                        data-projection-id="16"
                        style="opacity: 1;"
                     >
                        <div class="  mt-px">online</div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        23/04/18
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><a
                        href="#"
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                        >Edit</a
                     ></td
                  ></tr
               ><tr
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div class="flex items-center gap-4">
                        <div>
                           <p
                              class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold"
                           >
                              Alexa Liras
                           </p>
                           <p
                              class="block antialiased font-sans text-xs font-normal text-blue-gray-500"
                           >
                              alexa@creative-tim.com
                           </p>
                        </div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        Programator
                     </p>
                     <p class="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        Developer
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div
                        class="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white py-0.5 px-2 text-[11px] font-medium"
                        data-projection-id="18"
                        style="opacity: 1;"
                     >
                        <div class="  mt-px">offline</div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        11/01/19
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><a
                        href="#"
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                        >Edit</a
                     ></td
                  ></tr
               ><tr
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div class="flex items-center gap-4">
                        <div>
                           <p
                              class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold"
                           >
                              Laurent Perrier
                           </p>
                           <p
                              class="block antialiased font-sans text-xs font-normal text-blue-gray-500"
                           >
                              laurent@creative-tim.com
                           </p>
                        </div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        Executive
                     </p>
                     <p class="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        Projects
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div
                        class="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-green-600 to-green-400 text-white py-0.5 px-2 text-[11px] font-medium"
                        data-projection-id="20"
                        style="opacity: 1;"
                     >
                        <div class="  mt-px">online</div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        19/09/17
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><a
                        href="#"
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                        >Edit</a
                     ></td
                  ></tr
               ><tr
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div class="flex items-center gap-4">
                        <div>
                           <p
                              class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold"
                           >
                              Michael Levi
                           </p>
                           <p
                              class="block antialiased font-sans text-xs font-normal text-blue-gray-500"
                           >
                              michael@creative-tim.com
                           </p>
                        </div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        Programator
                     </p>
                     <p class="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        Developer
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div
                        class="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-green-600 to-green-400 text-white py-0.5 px-2 text-[11px] font-medium"
                        data-projection-id="22"
                        style="opacity: 1;"
                     >
                        <div class="  mt-px">online</div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        24/12/08
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><a
                        href="#"
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                        >Edit</a
                     ></td
                  ></tr
               ><tr
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div class="flex items-center gap-4">
                        <div>
                           <p
                              class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold"
                           >
                              Bruce Mars
                           </p>
                           <p
                              class="block antialiased font-sans text-xs font-normal text-blue-gray-500"
                           >
                              bruce@creative-tim.com
                           </p>
                        </div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        Manager
                     </p>
                     <p class="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        Executive
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><div
                        class="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white py-0.5 px-2 text-[11px] font-medium"
                        data-projection-id="24"
                        style="opacity: 1;"
                     >
                        <div class="  mt-px">offline</div>
                     </div></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        04/10/21
                     </p></td
                  ><td class="py-3 px-5 border-b border-blue-gray-50"
                     ><a
                        href="#"
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                        >Edit</a
                     ></td
                  ></tr
               ><tr
                  ><td class="py-3 px-5 "
                     ><div class="flex items-center gap-4">
                        <div>
                           <p
                              class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold"
                           >
                              Alexander
                           </p>
                           <p
                              class="block antialiased font-sans text-xs font-normal text-blue-gray-500"
                           >
                              alexander@creative-tim.com
                           </p>
                        </div>
                     </div></td
                  ><td class="py-3 px-5 "
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        Programator
                     </p>
                     <p class="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        Developer
                     </p></td
                  ><td class="py-3 px-5 "
                     ><div
                        class="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white py-0.5 px-2 text-[11px] font-medium"
                        data-projection-id="26"
                        style="opacity: 1;"
                     >
                        <div class="  mt-px">offline</div>
                     </div></td
                  ><td class="py-3 px-5 "
                     ><p
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                     >
                        14/09/20
                     </p></td
                  ><td class="py-3 px-5 "
                     ><a
                        href="#"
                        class="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                        >Edit</a
                     ></td
                  ></tr
               ></tbody
            >
         </table>
      </div> -->
   </div>
</div>
