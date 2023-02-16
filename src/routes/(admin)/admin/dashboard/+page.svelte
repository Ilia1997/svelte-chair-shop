<script lang="ts">
   import AdminNavbar from "$lib/components/admin/AdminNavbar.svelte";
   import Chart from "$lib/components/admin/Chart.svelte";
   import DashboardCart from "$lib/components/admin/DashboardCart.svelte";
   import DashboardMoneyIcon from "$lib/components/admin/VectorImages/DashboardMoneyIcon.svelte";
   import DashboardSalesIcon from "$lib/components/admin/VectorImages/DashboardSalesIcon.svelte";
   import DashboardUserIcon from "$lib/components/admin/VectorImages/DashboardUserIcon.svelte";

   const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
         {
            label: "My First dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
         },
      ],
   };

   const breadCrumbsData = {
      heading: "Dashboard",
      li: {
         0: { name: "Dashboard", path: "/admin/dashboard" },
      },
   };
</script>

<AdminNavbar {breadCrumbsData} />
<button
   class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-white text-blue-gray-900 shadow-md hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
   type="button"
   ><span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
      ><svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="currentColor"
         aria-hidden="true"
         class="h-5 w-5"
         ><path
            fill-rule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clip-rule="evenodd"
         /></svg
      ></span
   ></button
>
<div class="mt-12">
   <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      <DashboardCart
         itemName={"Today's Money"}
         itemValue={"$53k"}
         iconBgClass={"bg-gradient-to-tr from-blue-600 to-blue-400"}
         growValue={55}
         growText={"than last week"}
         iconComponent={DashboardMoneyIcon}
      />
      <DashboardCart
         itemName={"Today's Users"}
         itemValue={"34"}
         iconBgClass={"bg-gradient-to-tr from-pink-600 to-pink-400"}
         growValue={2}
         growText={"than last month"}
         iconComponent={DashboardUserIcon}
      />

      <DashboardCart
         itemName={"Sales"}
         itemValue={"56"}
         iconBgClass={"bg-gradient-to-tr from-orange-600 to-orange-400"}
         growValue={24}
         growText={"than last yesterday"}
         iconComponent={DashboardSalesIcon}
      />
   </div>
   <div class="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2">
      <div
         class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
      >
         <div
            class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg -mt-6"
         >
            <Chart data={chartData} />
         </div>
         <div class="p-6">
            <h6
               class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
               Monthly Sales
            </h6>
            <p
               class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"
            >
               15% increase in weekly sales
            </p>
         </div>
         <div class="p-6 border-t border-blue-gray-50 px-6 py-5">
            <p
               class="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4 text-inherit"
                  ><path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
               >&nbsp;updated 4 min ago
            </p>
         </div>
      </div>
      <div
         class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
      >
         <div
            class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg -mt-6"
         >
            <Chart data={chartData} />
         </div>
         <div class="p-6">
            <h6
               class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
               Monthly Sales
            </h6>
            <p
               class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"
            >
               15% increase in weekly sales
            </p>
         </div>
         <div class="p-6 border-t border-blue-gray-50 px-6 py-5">
            <p
               class="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4 text-inherit"
                  ><path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
               >&nbsp;updated 4 min ago
            </p>
         </div>
      </div>
   </div>
</div>
