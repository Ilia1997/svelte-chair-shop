<script lang="ts">
  import { enhance } from "$app/forms";
  import MyAccountSidebar from "$lib/components/MyAccountSidebar.svelte";
  import { slide } from "svelte/transition";
  export let data: any;
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import MyAccountGridSlot from "$lib/components/MyAccountGridSlot.svelte";
  const pageSettings: IPageSettings = getContext("pageSettings");
  let formData: any;
</script>

<MyAccountGridSlot>
  <MyAccountSidebar />
  <div>
    <h1 class="text-shop-blue font-josefin text-4xl">Personal data</h1>
    <form
      action="?update_user"
      method="POST"
      use:enhance={({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          console.log("🚀 ~ file: +page.svelte:42 ~ return ~ result", result);
          // @ts-ignore
          formData = result;
        };
      }}
    >
      <div class="grid grid-cols-2 gap-[25px] mt-7">
        <div>
          <label for="first_name" class="text-base mt-2">First name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={data.userData?.first_name || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="last_name" class="text-base mt-2">Last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={data.userData?.last_name || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="email" class="text-base mt-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.userData?.email || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="phone" class="text-base mt-2">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={data.userData?.phone || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="country" class="text-base mt-2">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={data.userData?.country || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="city" class="text-base mt-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={data.userData?.city || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="address" class="text-base mt-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={data.userData?.address || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="postal_code" class="text-base mt-2">Postal code</label>
          <input
            type="text"
            id="postal_code"
            name="postal_code"
            value={data.userData?.postal_code || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
      </div>
      <button
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        type="submit"
        class="text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-[160px]  mt-7  px-5 py-2.5 text-center "
        >Update info</button
      >
    </form>
  </div>
</MyAccountGridSlot>
