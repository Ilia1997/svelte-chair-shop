<script lang="ts">
  import type { IProduct, ITabs } from "$lib/interfaces/interface";
  import Tabs from "./Tabs.svelte";
  import BestSellers from "./tabs/BestSellers.svelte";
  import Featured from "./tabs/Featured.svelte";
  import NewArrivals from "./tabs/NewArrivals.svelte";

  import { setContext } from "svelte";
  export let newArrivalProducts: Array<IProduct>,
    bestSellersProducts: Array<IProduct>,
    featuredProducts: Array<IProduct>;

  let items: Array<ITabs> = [
    { label: "New Arrival", value: 1, component: NewArrivals },
    { label: "Best Seller", value: 2, component: BestSellers },
    { label: "Featured", value: 3, component: Featured },
  ];

  setContext("newArrivalProducts", newArrivalProducts);
  setContext("bestSellersProducts", bestSellersProducts);
  setContext("featuredProducts", featuredProducts);
</script>

<div class=" pb-20">
  <h2 class="pb-5 text-center">Leatest Products</h2>
  <div class="container">
    <Tabs {items} />
  </div>
</div>
