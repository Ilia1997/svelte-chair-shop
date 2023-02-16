<script>
   import { page } from "$app/stores";
   import CompanyLogo from "./VectorImages/CompanyLogo.svelte";
   import DashboardIcon from "./VectorImages/DashboardIcon.svelte";
   import OrderTablesIcon from "./VectorImages/DashboardIcon.svelte";
   import LogoutIcon from "./VectorImages/LogoutIcon.svelte";
   import TableIcon from "./VectorImages/TableIcon.svelte";
   import UserIcon from "./VectorImages/UserIcon.svelte";
</script>

<aside
   class="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0"
>
   <div class="relative border-b border-white/20">
      <a class="flex items-center gap-4 py-6 px-8" href="/">
         <CompanyLogo />
      </a>
   </div>
   <div class="m-4">
      <ul class="mb-4 flex flex-col gap-1">
         <li>
            <a aria-current="page" class="active" href="/admin/dashboard"
               ><button
                  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none 
            disabled:pointer-events-none text-xs py-3 rounded-lg 
            {$page.url.pathname === '/admin/dashboard'
                     ? 'bg-gradient-to-tr from-blue-600 to-blue-400 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40'
                     : ''}
             text-white  active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                  ><DashboardIcon />
                  <p
                     class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"
                  >
                     dashboard
                  </p></button
               ></a
            >
         </li>
         <li>
            <a class="" href="/admin/users"
               ><button
                  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  
               {$page.url.pathname.includes('/admin/users')
                     ? 'bg-gradient-to-tr from-blue-600 to-blue-400 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40'
                     : ''} py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                  ><UserIcon />
                  <p
                     class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"
                  >
                     users
                  </p></button
               ></a
            >
         </li>
         <li>
            <a class="" href="/admin/orders"
               ><button
                  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
            {$page.url.pathname === '/admin/orders'
                     ? 'bg-gradient-to-tr from-blue-600 to-blue-400 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40'
                     : ''}
            disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                  ><TableIcon />
                  <p
                     class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"
                  >
                     orders
                  </p></button
               ></a
            >
         </li>
      </ul>
      <ul class="mb-4 flex flex-col gap-1">
         <li>
            <form action="/logout" method="post" class="w-full ">
               <button
                  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="submit"
                  ><LogoutIcon />
                  <p
                     class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"
                  >
                     log out
                  </p></button
               >
            </form>
         </li>
      </ul>
   </div>
</aside>
