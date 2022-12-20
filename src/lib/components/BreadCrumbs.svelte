<script lang="ts">
  export let data: any;

  let liItems = data.li;
  let keys = Object.keys(liItems);
</script>

<div class="pt-24 pb-32 w-full bg-[#F6F5FF]">
  <div class="container">
    <h1 class="font-josefin text-[36px] leading-[42px] text-shop-off-blue mb-2">
      {data.heading}
    </h1>
    <nav class="rounded-md w-full">
      <ol class="list-reset flex">
        {#each { length: keys.length } as _, i}
          {#if liItems[i].path}
            <li>
              <a href={liItems[i].path} class={liItems[i].class}
                >{liItems[i].name}</a
              >
            </li>
          {:else}
            <li class="text-shop-red">{liItems[i].name}</li>
          {/if}

          {#if i < keys.length - 1}
            <li><span class="text-gray-500 mx-2">/</span></li>
          {/if}
        {/each}
      </ol>
    </nav>
  </div>
</div>
