<script lang="ts">
  import { fade } from "svelte/transition";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import Image from "$lib/components/Image.svelte";
  import type { IAvailableQauntity, IProduct } from "$lib/interfaces/interface";
  import { productsInCart } from "$lib/cartStore";
  import EmptyCard from "./EmptyCard.svelte";
  import ShopingDetail from "./ShopingDetail.svelte"
  import { writable, type Writable } from "svelte/store";

  let products: Array<IProduct>;
  let total: any;
  let checkoutPageCount: number = 0;

  // EMPTY PAID
  const checkoutStatus: Writable<string> = writable("EMPTY");

  $: products = $productsInCart ? $productsInCart : [];

  $: {
    if (products.length) {
      total = products.reduce((amount, item) => {
        if (item.total) {
          return item.total + amount;
        }
        return amount;
      }, 0);
    }
  }

  const minusItem = (product: IProduct) => {
    for (let item of products) {
      item.available_quantity_error = false;
      if (item.code === product.code) {
        if (item.quantity && item.quantity > 1) {
          item.quantity -= 1;
          item.total = item.quantity * item.price;
          $productsInCart = products;
        } else {
          $productsInCart = products.filter(
            (cartItem: IProduct) => cartItem != product
          );
        }
        return;
      }
    }
  };

  const plusItem = (product: IProduct) => {
    for (let item of products) {
      item.available_quantity_error = false;
      if (item.code === product.code && item.quantity) {
        item.quantity += 1;
        item.total = item.quantity * item.price;
        $productsInCart = products;
        return;
      }
    }
  };

  const clearAllProducts = () => {
    localStorage.removeItem("products");
    $productsInCart = [];
  };

  const removeProduct = (item: IProduct) => {
    $productsInCart = products.filter((cartItem: IProduct) => cartItem != item);
  };

  const checkProductsAvailability = async () => {
    let result = true;
    const productsCodes = products.map((product) => `'${product.code}'`);
    const query = `*[_type == "products" && code in [${productsCodes}]]{code, available_quantity}`;
    const response = await fetch("/shoping-cart/get-available-products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query }),
    });
    const {
      availableQuantityFromDB,
    }: { availableQuantityFromDB: Array<IAvailableQauntity> } =
      await response.json();

    products.forEach((product) => {
      availableQuantityFromDB.forEach((availableItem) => {
        if (availableItem.code == product.code) {
          if (
            product?.quantity &&
            product?.quantity > availableItem.available_quantity
          ) {
            product.available_quantity_error = true;
            result = false;
          } else {
            product.available_quantity_error = false;
          }
        }
      });
    });
    products = products;
    return result;
  };

  const goToShopingDetailForm = async () => {
    const result = await checkProductsAvailability();
    result ? (checkoutPageCount = 1) : false;
  };
</script>

<svelte:head>
  <title>Demo site - Shoping Cart</title>
  <script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<BreadCrumbs
  data={{
    heading: "Cart",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Cart",
        path: "/shoping-cart",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>
<div class="container min-h-[60vh]">
  {#if products && products.length > 0}
    {#if checkoutPageCount === 0}
      <div class="py-24 grid grid-cols-[1fr_377px] gap-16 ">
        <div>
          <div
            class="grid grid-cols-[minmax(230px,_1fr)_1fr_1fr_1fr]  mb-8 gap-8"
          >
            <div class=" font-josefin text-shop-off-blue text-xl font-semibold">
              Product
            </div>
            <div class=" font-josefin text-shop-off-blue text-xl font-semibold">
              Price
            </div>
            <div class=" font-josefin text-shop-off-blue text-xl font-semibold">
              Quantity
            </div>
            <div class=" font-josefin text-shop-off-blue text-xl font-semibold">
              Total
            </div>
          </div>
          {#each products as product}
            <div
              class="grid grid-cols-[minmax(230px,_1fr)_1fr_1fr_1fr] mt-5  pb-4 gap-8 border-b border-[#E8E6F1]"
            >
              <div class="flex ">
                <div class="relative  mr-4">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <button
                    on:click={() => removeProduct(product)}
                    class="appearance-none absolute -top-[6px] -right-[6px] hover:scale-110 transition-transform cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      class=""
                      fill="none"
                    >
                      <path
                        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                        fill="black"
                      />
                      <path
                        d="M7.8002 4.19995L4.2002 7.79995"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.2002 4.19995L7.8002 7.79995"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <Image
                    imageSrc={product.main_image}
                    className="rounded-sm w-[83px] h-[87px]"
                  />
                </div>

                <div class="font-josefin text-sm mt-2 text-black">
                  {product.name}
                </div>
              </div>
              <div class="font-josefin text-sm text-shop-off-blue self-center">
                ${product.price}
              </div>
              <div
                class="flex items-center overflow-hidden justify-between bg-[#F0EFF2] h-[20px] w-[70px] self-center  {product.available_quantity_error
                  ? 'border-red-500 border'
                  : ''}"
              >
                <button
                  class="w-[20px] text-[#BEBFC2] bg-[#E7E7EF] flex items-center justify-center"
                  on:click={() => minusItem(product)}
                >
                  -
                </button>
                <div class="font-lato text-xs text-[#656565]">
                  {product.quantity}
                </div>
                <button
                  class="w-[20px] text-[#BEBFC2] bg-[#E7E7EF] flex items-center justify-center"
                  on:click={() => plusItem(product)}
                >
                  +
                </button>
              </div>
              <div class="font-josefin text-sm text-shop-off-blue self-center">
                ${product.total}
              </div>
            </div>
            {#if product.available_quantity_error === true}
              <p
                class="px-4 py-2 bg-red-300 text-sm  text-center w-full rounded-md "
                in:fade
              >
                Please increase quantity to max available - {product.available_quantity}
              </p>
            {/if}
          {/each}

          <button
            on:click={clearAllProducts}
            class="px-10 py-3 block text-base leading-5 ml-auto mt-8 text-white hover:bg-shop-purple bg-shop-pink transition-all rounded-sm "
            >Clear Cart</button
          >
        </div>

        <div>
          <div
            class=" font-josefin text-shop-off-blue text-xl font-semibold text-center mb-11"
          >
            Cart Totals
          </div>
          <div class="bg-[#F4F4FC] rounded-sm py-8 px-7">
            <div
              class="flex items-end justify-between pb-2.5 border-b border-[#E8E6F1]"
            >
              <span
                class="font-lato text-shop-off-blue text-[18px] leading-6 font-medium"
                >Totals:</span
              >
              <span class="text-base text-shop-off-blue font-lato"
                >${total}</span
              >
            </div>
            <div class="flex items-center mt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <rect width="8" height="8" rx="3" fill="#19D16F" />
                <path
                  d="M6.23649 2.40335C6.2055 2.37211 6.16863 2.34731 6.12801 2.33038C6.08739 2.31346 6.04382 2.30475 5.99982 2.30475C5.95582 2.30475 5.91225 2.31346 5.87163 2.33038C5.83101 2.34731 5.79414 2.37211 5.76315 2.40335L3.27982 4.89001L2.23649 3.84335C2.20431 3.81227 2.16633 3.78783 2.12471 3.77143C2.0831 3.75503 2.03865 3.74698 1.99393 3.74776C1.9492 3.74853 1.90506 3.75811 1.86404 3.77594C1.82301 3.79377 1.7859 3.81951 1.75482 3.85168C1.72374 3.88386 1.6993 3.92184 1.6829 3.96345C1.6665 4.00507 1.65846 4.04951 1.65923 4.09424C1.66 4.13897 1.66958 4.1831 1.68741 4.22413C1.70524 4.26516 1.73098 4.30227 1.76315 4.33335L3.04315 5.61335C3.07414 5.64459 3.11101 5.66939 3.15163 5.68631C3.19225 5.70323 3.23582 5.71195 3.27982 5.71195C3.32382 5.71195 3.36739 5.70323 3.40801 5.68631C3.44863 5.66939 3.4855 5.64459 3.51649 5.61335L6.23649 2.89335C6.27032 2.86213 6.29732 2.82425 6.31579 2.78208C6.33426 2.73992 6.3438 2.69438 6.3438 2.64835C6.3438 2.60231 6.33426 2.55678 6.31579 2.51461C6.29732 2.47245 6.27032 2.43456 6.23649 2.40335Z"
                  fill="white"
                />
              </svg>
              <div class=" font-lato text-xs text-[#8A91AB] ml-2">
                Shipping & taxes calculated at checkout
              </div>
            </div>
            <button
              on:click={goToShopingDetailForm}
              class="w-full py-2.5 bg-shop-green mt-9 text-white font-bold font-lato hover:bg-shop-purple"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    {:else if checkoutPageCount === 1}
      <ShopingDetail {products} {total} {checkoutStatus} />
    {/if}
  {/if}
  <EmptyCard productLength={products.length} {checkoutStatus} />
</div>
