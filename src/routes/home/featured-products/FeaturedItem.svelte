<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import type { IProduct } from "$lib/interfaces/interface";
  export let product: IProduct;
  export let selectedProductImage: string;
  export let productGalleryModal: boolean;

  const openModal = () => {
    selectedProductImage = product.main_image;
    productGalleryModal = true;
  };
</script>

<div
  class="group/main w-full bg-[#F6F7FB] shadow-md relative flex flex-col justify-between"
>
  <div
    class="grid gap-1 grid-cols-3 absolute top-2.5 left-2.5 transition-all duration-500 group-hover/main:z-10 group-hover/main:opacity-100 opacity-0"
  >
    <div
      class="group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="group-hover:fill-[#2F1AC4]"
          d="M1.97925 3.36456C1.97925 3.20709 2.0418 3.05607 2.15315 2.94472C2.2645 2.83337 2.41553 2.77081 2.573 2.77081H3.01475C3.76683 2.77081 4.21808 3.27669 4.47537 3.74694C4.64716 4.06044 4.77146 4.42381 4.86883 4.75315C4.89517 4.75107 4.92158 4.75001 4.948 4.74998H14.8422C15.4993 4.74998 15.9743 5.37856 15.7938 6.0111L14.3467 11.0849C14.2169 11.54 13.9424 11.9404 13.5647 12.2255C13.187 12.5107 12.7267 12.665 12.2535 12.6651H7.54466C7.06768 12.6651 6.60389 12.5085 6.22458 12.2193C5.84527 11.93 5.57144 11.5243 5.44516 11.0643L4.8435 8.86981L3.846 5.50681L3.84521 5.50048C3.72171 5.0516 3.60612 4.63123 3.43354 4.31773C3.26808 4.01294 3.13508 3.95831 3.01554 3.95831H2.573C2.41553 3.95831 2.2645 3.89576 2.15315 3.78441C2.0418 3.67306 1.97925 3.52204 1.97925 3.36456ZM5.99537 8.58165L6.58992 10.75C6.70866 11.1791 7.09896 11.4776 7.54466 11.4776H12.2535C12.4686 11.4776 12.6778 11.4075 12.8495 11.2779C13.0212 11.1483 13.1461 10.9664 13.2051 10.7595L14.5802 5.93748H5.21321L5.98429 8.53969L5.99537 8.58165Z"
          fill="url(#paint0_linear_241_1457)"
        />
        <path
          class="group-hover:fill-[#2F1AC4]"
          d="M8.70842 15.0416C8.70842 15.4616 8.5416 15.8643 8.24467 16.1612C7.94773 16.4582 7.54501 16.625 7.12508 16.625C6.70516 16.625 6.30243 16.4582 6.0055 16.1612C5.70856 15.8643 5.54175 15.4616 5.54175 15.0416C5.54175 14.6217 5.70856 14.219 6.0055 13.9221C6.30243 13.6251 6.70516 13.4583 7.12508 13.4583C7.54501 13.4583 7.94773 13.6251 8.24467 13.9221C8.5416 14.219 8.70842 14.6217 8.70842 15.0416ZM7.52092 15.0416C7.52092 14.9367 7.47921 14.836 7.40498 14.7617C7.33075 14.6875 7.23006 14.6458 7.12508 14.6458C7.0201 14.6458 6.91942 14.6875 6.84518 14.7617C6.77095 14.836 6.72925 14.9367 6.72925 15.0416C6.72925 15.1466 6.77095 15.2473 6.84518 15.3215C6.91942 15.3958 7.0201 15.4375 7.12508 15.4375C7.23006 15.4375 7.33075 15.3958 7.40498 15.3215C7.47921 15.2473 7.52092 15.1466 7.52092 15.0416Z"
          fill="url(#paint0_linear_241_1457)"
        />
        <path
          class="group-hover:fill-[#2F1AC4]"
          d="M14.2502 15.0416C14.2502 15.4616 14.0833 15.8643 13.7864 16.1612C13.4895 16.4582 13.0868 16.625 12.6668 16.625C12.2469 16.625 11.8442 16.4582 11.5472 16.1612C11.2503 15.8643 11.0835 15.4616 11.0835 15.0416C11.0835 14.6217 11.2503 14.219 11.5472 13.9221C11.8442 13.6251 12.2469 13.4583 12.6668 13.4583C13.0868 13.4583 13.4895 13.6251 13.7864 13.9221C14.0833 14.219 14.2502 14.6217 14.2502 15.0416ZM13.0627 15.0416C13.0627 14.9367 13.021 14.836 12.9467 14.7617C12.8725 14.6875 12.7718 14.6458 12.6668 14.6458C12.5618 14.6458 12.4612 14.6875 12.3869 14.7617C12.3127 14.836 12.271 14.9367 12.271 15.0416C12.271 15.1466 12.3127 15.2473 12.3869 15.3215C12.4612 15.3958 12.5618 15.4375 12.6668 15.4375C12.7718 15.4375 12.8725 15.3958 12.9467 15.3215C13.021 15.2473 13.0627 15.1466 13.0627 15.0416Z"
          fill="url(#paint0_linear_241_1457)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_241_1457"
            x1="1.23706"
            y1="1.23694"
            x2="13.735"
            y2="13.7444"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1389FF" />
            <stop offset="1" stop-color="#1DB4E7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class=" group w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-colors  hover:shadow-sm cursor-pointer"
      on:click={openModal}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="group-hover:fill-[#2F1AC4]"
          d="M9.37512 6.25H7.50012V4.375C7.50012 4.20924 7.43428 4.05027 7.31707 3.93306C7.19985 3.81585 7.04088 3.75 6.87512 3.75C6.70936 3.75 6.55039 3.81585 6.43318 3.93306C6.31597 4.05027 6.25012 4.20924 6.25012 4.375V6.25H4.37512C4.20936 6.25 4.05039 6.31585 3.93318 6.43306C3.81597 6.55027 3.75012 6.70924 3.75012 6.875C3.75012 7.04076 3.81597 7.19973 3.93318 7.31694C4.05039 7.43415 4.20936 7.5 4.37512 7.5H6.25012V9.375C6.25012 9.54076 6.31597 9.69973 6.43318 9.81694C6.55039 9.93415 6.70936 10 6.87512 10C7.04088 10 7.19985 9.93415 7.31707 9.81694C7.43428 9.69973 7.50012 9.54076 7.50012 9.375V7.5H9.37512C9.54088 7.5 9.69985 7.43415 9.81707 7.31694C9.93428 7.19973 10.0001 7.04076 10.0001 6.875C10.0001 6.70924 9.93428 6.55027 9.81707 6.43306C9.69985 6.31585 9.54088 6.25 9.37512 6.25ZM13.5689 12.6813L11.2501 10.3813C12.1502 9.25901 12.5861 7.83456 12.4681 6.40081C12.3502 4.96706 11.6874 3.63299 10.6161 2.6729C9.54473 1.71282 8.14625 1.1997 6.7082 1.23905C5.27015 1.2784 3.90182 1.86723 2.88459 2.88446C1.86735 3.9017 1.27852 5.27003 1.23917 6.70808C1.19982 8.14613 1.71294 9.54461 2.67303 10.616C3.63311 11.6873 4.96719 12.3501 6.40094 12.468C7.83468 12.5859 9.25913 12.1501 10.3814 11.25L12.6814 13.55C12.7395 13.6086 12.8086 13.6551 12.8848 13.6868C12.9609 13.7185 13.0426 13.7349 13.1251 13.7349C13.2076 13.7349 13.2893 13.7185 13.3655 13.6868C13.4416 13.6551 13.5108 13.6086 13.5689 13.55C13.6815 13.4335 13.7445 13.2777 13.7445 13.1156C13.7445 12.9535 13.6815 12.7978 13.5689 12.6813ZM6.87512 11.25C6.00983 11.25 5.16397 10.9934 4.4445 10.5127C3.72504 10.0319 3.16428 9.34867 2.83315 8.54924C2.50202 7.74981 2.41538 6.87015 2.58419 6.02148C2.753 5.17281 3.16968 4.39326 3.78153 3.78141C4.39339 3.16955 5.17294 2.75288 6.0216 2.58407C6.87027 2.41526 7.74994 2.50189 8.54936 2.83303C9.34879 3.16416 10.0321 3.72492 10.5128 4.44438C10.9935 5.16385 11.2501 6.00971 11.2501 6.875C11.2501 8.03532 10.7892 9.14812 9.96872 9.96859C9.14824 10.7891 8.03545 11.25 6.87512 11.25Z"
          fill="url(#paint0_linear_241_1457)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_241_1457"
            x1="1.23706"
            y1="1.23694"
            x2="13.735"
            y2="13.7444"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1389FF" />
            <stop offset="1" stop-color="#1DB4E7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div class="flex justify-center pt-12 pb-3 relative rounded-sm text-white">
    <div class="h-[165px] flex items-center">
      <Image
        imageSrc={product.main_image}
        altText={product.name}
        className={"w-[148px]"}
      />
    </div>
    <a href="/products/{product.code}"
      class="text-xs absolute -bottom-9 px-3 py-2 bg-shop-green transition-all duration-500 group-hover/main:bottom-2.5 hover:bg-shop-purple"
      >View Details</a
    >
  </div>
  <div
    class="bg-white flex flex-col items-center  py-4 relative z-10 transition-colors group-hover/main:bg-shop-blue"
  >
    <div class="text-shop-pink group-hover/main:text-white transition-colors">
      {product.name}
    </div>
    <div class="w-[52px] mx-auto flex my-3 justify-between">
      <div class="w-[14px] h-1 rounded-xl bg-[#05E6B7]" />
      <div class="w-[14px] h-1 rounded-xl bg-[#F701A8]" />
      <div class="w-[14px] h-1 rounded-xl bg-[#00009D]" />
    </div>
    <div
      class="text-sm leading-4 transition-colors text-shop-off-blue mb-3 group-hover/main:text-white"
    >
      Code - {product.code}
    </div>
    <div
      class="text-sm leading-4 transition-colors text-shop-off-blue font-normal group-hover/main:text-white"
    >
      ${product.price}
    </div>
  </div>
</div>
