<script lang="ts">
   import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
   const breadCrumbsData = {
      heading: "Orders",
      li: {
         0: { name: "Orders", path: "/admin/orders" },
      },
   };
</script>

<AdminNavbar {breadCrumbsData} />
<div class="mt-12 mb-8 flex flex-col gap-12">
   <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div
         class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6"
      >
         <h6
            class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white"
         >
            Orders table
         </h6>
      </div>
      <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
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
      </div>
   </div>
</div>
