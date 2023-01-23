<script lang="ts">
  import { fade } from "svelte/transition";
  import { enhance } from "$app/forms";
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  import type { ActionData } from "../$types";
  import StripePayment from "./StripePayment.svelte";
  export let products: Array<IProduct>;
  export let total: number;
  export let form: ActionData;
  import SuccessPaymentImage from "$lib/assets/card/20943914.jpg";
  let formStatus = false;
  console.log("🚀 ~ file: ShopingDetail.svelte:10 ~ form", form);
</script>

{#if !formStatus}
  <div class="grid grid-cols-[1fr_371px] py-24 gap-7">
    {#if form?.success}
      <StripePayment {total} bind:formStatus {form} />
    {:else}
      <div class="bg-[#F8F8FD] px-8 py-14">
        <form action="?/addAddresAndShopingDetail" method="POST" use:enhance>
          <div class="flex justify-between">
            <div class="font-josefin text-[18px] leading-5 text-shop-off-blue">
              Contact Information
            </div>
            <div class="flex text-[#C1C8E1] text-sm tracking-[0.01em]">
              <span> Already have an account? </span>
              <a
                href="/login"
                class="ml-1 hover:text-shop-off-purple transition-colors"
                >Login</a
              >
            </div>
          </div>
          <input
            type="text"
            name="email_or_phone"
            required
            placeholder="Email or mobile phone number"
            class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em] appearance-none border-b-[2px] border-[#BFC6E0] py-3 mt-7 w-full bg-transparent outline-none focus:outline-none"
          />
          <div
            class="font-josefin text-[18px] leading-5 text-shop-off-blue mt-24"
          >
            Shipping address
          </div>
          <div class="grid grid-cols-2 gap-7 mt-7">
            <input
              required
              type="text"
              name="first_name"
              placeholder="First name"
              class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em] appearance-none border-b-[2px] border-[#BFC6E0] py-3  w-full bg-transparent outline-none focus:outline-none"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em] appearance-none border-b-[2px] border-[#BFC6E0] py-3  w-full bg-transparent outline-none focus:outline-none"
            />
          </div>
          <input
            required
            type="text"
            name="address"
            placeholder="Address"
            class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em] mt-6 appearance-none border-b-[2px] border-[#BFC6E0] py-3  w-full bg-transparent outline-none focus:outline-none"
          />
          <input
            required
            type="text"
            name="city"
            placeholder="City"
            class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em]  mt-6  appearance-none border-b-[2px] border-[#BFC6E0] py-3  w-full bg-transparent outline-none focus:outline-none"
          />
          <div class="grid grid-cols-2 gap-7 mt-7">
            <input
              required
              type="text"
              name="country"
              placeholder="Country"
              class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em] appearance-none border-b-[2px] border-[#BFC6E0] py-3  w-full bg-transparent outline-none focus:outline-none"
            />
            <input
              required
              type="text"
              name="postal_code"
              placeholder="Postal code"
              class="text-shop-navy-blue text-sm placeholder:text-[#C1C8E1] tracking-[0.01em] appearance-none border-b-[2px] border-[#BFC6E0] py-3  w-full bg-transparent outline-none focus:outline-none"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2.5 bg-shop-green mt-9 text-white font-bold font-lato hover:bg-shop-purple"
          >
            Proceed To Checkout
          </button>
        </form>
      </div>
    {/if}

    <div>
      {#each products as product}
        <div class="border-b border-[#E1E1E4] mb-3.5">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-start">
              <Image
                imageSrc={product.main_image}
                className="rounded-sm w-[83px] h-[87px]"
              />

              <div class="font-josefin text-sm mt-2 ml-4 text-black">
                {product.name}
              </div>
            </div>
            <div class="font-josefin text-sm text-shop-off-blue self-center">
              ${product.total}
            </div>
          </div>
        </div>
      {/each}
      <div>
        <div class="bg-[#F4F4FC] rounded-sm py-8 px-7 mt-8">
          <div
            class="flex items-end justify-between pb-2.5 border-b border-[#E8E6F1]"
          >
            <span
              class="font-lato text-shop-off-blue text-[18px] leading-6 font-medium"
              >Totals:</span
            >
            <span class="text-base text-shop-off-blue font-lato">${total}</span>
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
        </div>
      </div>
    </div>
  </div>
{/if}
<div
  class="py-24 text-center transition-opacity delay-100 duration-300 {formStatus
    ? 'opacity-100'
    : 'opacity-0'}"
>
  <h3 class="text-shop-navy-blue">Payment Succeeded!</h3>
  <img src={SuccessPaymentImage} alt="" class="max-w-[500px] mt-10 mx-auto" />
  <a
    href="/products"
    class="block text-center w-40 mx-auto py-2.5 bg-shop-green mt-10 text-white font-bold font-lato hover:bg-shop-purple"
    >Go Shopping</a
  >
</div>
