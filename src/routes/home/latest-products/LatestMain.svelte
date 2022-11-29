<script lang="ts">
  import type { IProduct, ITabs } from "$lib/interfaces/interface";
  import Tabs from "./Tabs.svelte";
  import BestSellers from "./tabs/BestSellers.svelte";
  import Featured from "./tabs/Featured.svelte";
  import NewArrivals from "./tabs/NewArrivals.svelte";
  import ProuctImage1 from "$lib/assets/prod-3.png";
  import ProuctImage2 from "$lib/assets/prod-4.png";
  import ProuctImage3 from "$lib/assets/prod-5.png";
  import ProuctImage4 from "$lib/assets/prod-6.png";
  import ProuctImage5 from "$lib/assets/prod-7.png";
  import ProuctImage6 from "$lib/assets/prod-8.png";
  import { setContext } from "svelte";

  let items: Array<ITabs> = [
    { label: "New Arrival", value: 1, component: NewArrivals },
    { label: "Best Seller", value: 2, component: BestSellers },
    { label: "Featured", value: 3, component: Featured },
  ];

  const newArrivalsProducts: Array<IProduct> = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      oldPrice: 65.0,
      isSale: false,
      image: ProuctImage1,
    },
    {
      name: "Cantilever chair 2",
      code: "Y523563",
      price: 65.0,
      oldPrice: 65.0,
      isSale: false,
      image: ProuctImage2,
    },
    {
      name: "Cantilever chair 3",
      code: "Y523561",
      price: 30.0,
      oldPrice: 40.0,
      isSale: true,
      image: ProuctImage3,
    },
  ];
  const bestSellersProducts: Array<IProduct> = [
    {
      name: "Cantilever chair 4",
      code: "Y523555",
      price: 30.0,
      oldPrice: 34.0,
      isSale: false,
      image: ProuctImage4,
    },
    {
      name: "Cantilever chair 4",
      code: "Y523555",
      price: 30.0,
      oldPrice: 34.0,
      isSale: true,
      image: ProuctImage5,
    },
    {
      name: "Cantilever chair 4",
      code: "Y523555",
      price: 30.0,
      oldPrice: 34.0,
      isSale: false,
      image: ProuctImage6,
    },
  ];

  const featuredProducts: Array<IProduct> = [
    {
      name: "Cantilever chair 4",
      code: "Y523555",
      price: 30.0,
      oldPrice: 34.0,
      isSale: true,
      image: ProuctImage5,
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      oldPrice: 65.0,
      isSale: false,
      image: ProuctImage1,
    },
    {
      name: "Cantilever chair 2",
      code: "Y523563",
      price: 65.0,
      oldPrice: 65.0,
      isSale: false,
      image: ProuctImage2,
    },
  ];

  setContext("newArrivalsProducts", newArrivalsProducts);
  setContext("bestSellersProducts", bestSellersProducts);
  setContext("featuredProducts", featuredProducts);
</script>

<div class=" pb-[56px]">
  <h2 class="pb-5 text-center">Leatest Products</h2>
  <div class="container">
    <Tabs {items} />
  </div>
</div>
