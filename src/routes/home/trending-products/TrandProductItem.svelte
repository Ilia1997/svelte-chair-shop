<script lang="ts">
  import type { IProduct } from "$lib/interfaces/interface";
  export let product: IProduct;
</script>

<a href="#" class="px-3 pt-3 pb-8 bg-white drop-shadow-base group">
  <div
    class="w-full min-h-[244px] bg-[#F5F6F8] flex items-center justify-center py-7"
  >
    <img
      src={product.image}
      class="w-[171px] group-hover:scale-105 transition-transform"
      alt=""
    />
  </div>
  <div class="flex justify-center flex-col items-center mt-4">
    <span class="font-lato text-base font-bold text-shop-off-blue"
      >{product.name}</span
    >

    <div class="flex items-center mt-2 ">
      <span class="text-shop-navy-blue text-sm">${product.price}</span><span
        class="text-xs text-shop-navy-blue opacity-30 ml-3 line-through"
        >${product.price}</span
      >
    </div>
  </div>
</a>
