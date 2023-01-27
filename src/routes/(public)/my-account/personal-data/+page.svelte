<script lang="ts">
  import { enhance } from "$app/forms";
  import MyAccountSidebar from "$lib/components/MyAccountSidebar.svelte";
  import { slide } from "svelte/transition";
  export let data: any;
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  import MyAccountGridSlot from "$lib/components/MyAccountGridSlot.svelte";
  import type { ActionData } from "./$types";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let form: ActionData;

  let formData: any;
  let userFormData: any;
  let userPasswordFormData: any;
</script>

<MyAccountGridSlot>
  <MyAccountSidebar />
  <div>
    <h1 class="text-shop-blue font-josefin text-4xl">Personal data</h1>
    <form
      action="?/update_profile"
      method="POST"
      use:enhance={({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          //@ts-ignore
          formData = result.data;
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
            placeholder="Enter first name"
            value={data.profileData?.first_name || ""}
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
            placeholder="Enter last name"
            value={data.profileData?.last_name || ""}
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
            placeholder="Enter country"
            value={data.profileData?.country || ""}
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
            placeholder="Enter city"
            value={data.profileData?.city || ""}
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
            placeholder="Enter your address"
            value={data.profileData?.address || ""}
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
            placeholder="Enter your postal code"
            value={data.profileData?.postal_code || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
            {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
      </div>
      {#if formData?.error}
        <p class="text-sm text-red-600 mt-1" transition:slide|local>
          {formData?.message}
        </p>
      {/if}
      {#if formData?.success}
        <p class="text-sm text-green-400 mt-1" transition:slide|local>
          Personal data updated successfully!
        </p>
      {/if}
      <button
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        type="submit"
        class="text-white bg-shop-pink block ml-auto font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-[160px]  mt-7  px-5 py-2.5 text-center "
        >Update info</button
      >
    </form>
    <h2 class="text-shop-blue font-josefin text-3xl mt-7">User email</h2>
    <form
      action="?/update_email"
      method="POST"
      use:enhance={({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          // @ts-ignore
          userFormData = result.data;
        };
      }}
    >
      <div class="grid grid-cols-2 gap-[25px] mt-5">
        <div>
          <label for="email" class="text-base mt-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.userData?.email || ""}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
      {userFormData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
      </div>
      {#if userFormData?.error}
        <p class="text-sm text-red-600 mt-1" transition:slide|local>
          {userFormData?.message}
        </p>
      {/if}
      {#if userFormData?.success}
        <p class="text-sm text-green-400 mt-1" transition:slide|local>
          Email updated successfully!
        </p>
      {/if}
      <button
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        type="submit"
        class="text-white bg-shop-pink block ml-auto font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-[160px]  mt-7  px-5 py-2.5 text-center "
        >Update email</button
      >
    </form>
    <h2 class="text-shop-blue font-josefin text-3xl mt-7">Change password</h2>
    <form
      action="?/update_user_password"
      method="POST"
      use:enhance={({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          //@ts-ignore
          userPasswordFormData = result.data;
        };
      }}
    >
      <div class="grid grid-cols-2 gap-[25px] mt-5">
        <div>
          <label for="password" class="text-base mt-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
      {userPasswordFormData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
        <div>
          <label for="password_2" class="text-base mt-2">Password</label>
          <input
            type="password"
            id="password_2"
            name="password_2"
            placeholder="Confirm password"
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  min-h-[40px] 
      {userPasswordFormData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            required
          />
        </div>
      </div>
      {#if userPasswordFormData?.error}
        <p class="text-sm text-red-600 mt-1" transition:slide|local>
          {userPasswordFormData?.message}
        </p>
      {/if}
      {#if userPasswordFormData?.success}
        <p class="text-sm text-green-400 mt-1" transition:slide|local>
          Password updated successfully!
        </p>
      {/if}
      <button
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        type="submit"
        class="text-white block ml-auto bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-[200px]  mt-7  px-5 py-2.5 text-center "
        >Change password</button
      >
    </form>
  </div>
</MyAccountGridSlot>
