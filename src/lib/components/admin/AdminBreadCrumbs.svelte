<script lang="ts">
   export let data: any;
   let liItems = data.li;
   let keys = Object.keys(liItems);
</script>

<div class="py-3 md:py-5  w-full ">
   <div class="container">
      <nav class="rounded-md w-full">
         <ol class="list-reset flex">
            {#each { length: keys.length } as _, i}
               {#if liItems[i].path}
                  <li>
                     <a href={liItems[i].path} class="text-white hover:text-orange-400"
                        >{liItems[i].name}</a
                     >
                  </li>
               {:else}
                  <li class="text-shop-red" />
               {/if}

               {#if i < keys.length - 1}
                  <li>
                     <span class="text-white mx-2">/</span>
                  </li>
               {/if}
            {/each}
         </ol>
      </nav>
   </div>
</div>
