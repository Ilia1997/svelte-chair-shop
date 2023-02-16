<script lang="ts">
   import { scale } from "svelte/transition";
   import Image from "$lib/components/Image.svelte";
   import MyAccountGridSlot from "$lib/components/MyAccountGridSlot.svelte";
   import MyAccountSidebar from "$lib/components/MyAccountSidebar.svelte";
   import EmptyCartImage from "$lib/assets/empty-cart.jpg";

   import type { PageData } from "./$types";
   import { convertDate } from "$lib/functions/convertDate";
   import type { IOrders } from "$lib/interfaces/interface";
   export let data: PageData;
   const { previousOrders } = data;
   console.log("🚀 ~ file: +page.svelte:8 ~ previousOrders", previousOrders?.length);
   let orders: Array<IOrders>;

   if (previousOrders) {
      orders = previousOrders.map((order) => {
         return { ...order, parsedProducts: JSON.parse(order.products_json) };
      });
   }
</script>

<MyAccountGridSlot>
   <MyAccountSidebar />
   <div>
      <h1 class="text-shop-blue font-josefin text-4xl">My orders</h1>
      {#if previousOrders?.length === 0}
         <div class="mx-auto max-w-[400px] my-7 flex flex-col justify-center items-center">
            <h3 class="text-shop-blue font-josefin text-xl">Your orders list is empty</h3>
            <img
               src={EmptyCartImage}
               alt="Empty Cart"
               in:scale={{ delay: 400, duration: 300 }}
               class="mt-4 w-80 h-80"
            />
            <a
               href="/products"
               class="block text-center w-full py-2.5 bg-shop-green mt-10 text-white font-bold font-lato hover:bg-shop-purple"
               >Go Shopping</a
            >
         </div>
      {:else}
         <div class="grid gap-4 mt-7">
            {#each orders as order}
               <div class="px-6 py-3 bg-[#F8F8F8] flex justify-between rounded-md">
                  <div class="mr-6 ">
                     <div><span>Order number: {order.id}</span></div>
                     <div class="mt-1.5 text-gray-500">
                        <span>Date: {convertDate(order.created_at)}</span>
                     </div>
                     <div class=" text-gray-500">
                        <span>Total sum: ${order.total_sum}</span>
                     </div>
                  </div>
                  <div class="flex justify-around gap-5">
                     {#each order.parsedProducts as product}
                        <div class="flex ">
                           <Image
                              imageSrc={product.main_image
                                 ? product.main_image
                                 : "/images/no-image.png"}
                              className=" w-[65px] h-auto relative mr-2 rounded-sm object-contain"
                              altText={product.name}
                           />
                           <div class="pt-2">
                              <div class="text-sm font-lato">{product.name}</div>
                              <div class="text-xs text-gray-500 font-lato">
                                 Quantity: {product.quantity}
                              </div>
                              <div class="text-xs font-lato">$ {product.total}</div>
                           </div>
                        </div>
                     {/each}
                  </div>
               </div>
            {/each}
         </div>
      {/if}
   </div>
</MyAccountGridSlot>
