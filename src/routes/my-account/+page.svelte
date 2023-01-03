<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  let errorData: boolean = false,
    imageIsSet: boolean = false;
  export let data: PageData;
  export let form: ActionData;
  import AvatarImage from "$lib/assets/account-avatar.webp";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { slide } from "svelte/transition";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");

  let inputFileText = "Upload avatar image";
  const setFileUploadStatus = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const fileExisting: boolean = (target.files as FileList).length > 0;
    fileExisting ? (inputFileText = "File uploaded") : false;
  };
</script>

<BreadCrumbs
  data={{
    heading: "My Account",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "My account",
        path: "/my-account",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>
<div class="container py-6">
  {#if data.session}
    <div
      class="flex place-items-center flex-col px-12 py-24 mx-auto my-6 rounded-xl shadow-base max-w-[800px]"
    >
      <div class="flex">
        <div class="w-20 h-20">
          {#if data?.userData?.file}
            <img
              src={data?.userData?.file}
              alt=""
              class="w-full rounded-full h-full"
            />
          {:else}
            <div
              style:background-color={pageSettings?.bgMainColor2?.hex &&
                pageSettings.bgMainColor2.hex}
              class=" bg-gray-500 rounded-full flex justify-center items-center w-full h-full"
            >
              <img src={AvatarImage} alt="" class="max-w-[50px]" />
            </div>
          {/if}
        </div>
      </div>
      <div class="mt-4">Welcome {data.session.user.email}</div>
      {#if form?.updateUserStatus}
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="text-center font-lato text-shop-grey text-base"
        >
          Your accout has been updated
        </p>
      {:else}
        <form
          action="?/update"
          method="post"
          class="mt-5 mb-5 w-full"
          use:enhance
        >
          <!-- <div class="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
            {errorData
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Change email"
            required
          />
        </div> -->
          <div class="mb-6">
            <input
              type="text"
              id="username"
              name="username"
              value={data.userData?.username || ""}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
            {errorData
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              placeholder="Set username"
              required
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={data.userData?.full_name || ""}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
            {errorData
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              placeholder="Set full name"
              required
            />
          </div>
          <div class="mb-6">
            <input
              type="url"
              id="website"
              name="website"
              value={data.userData?.website || ""}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
            {errorData
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              placeholder="Set website url"
              required
            />
          </div>
          <div
            class="mb-6 border bg-gray-50   text-gray-900 text-base font-lato relative h-[58px] p-4 rounded-sm {errorData
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
          >
            <div class="  text-base font-lato text-shop-grey">
              {inputFileText}
            </div>
            <input
              type="file"
              id="avatar_url"
              name="avatar_url"
              on:change={setFileUploadStatus}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 absolute block w-full h-[58px] top-0 left-0 opacity-0 cursor-pointer"
              placeholder="Upload avatar image"
              required
            />
          </div>
          {#if form?.error}
            <p
              class="text-sm text-red-600 mt-1 mb-2 font-lato"
              transition:slide|local
            >
              {form?.error}
            </p>
          {/if}
          <button
            style:background-color={pageSettings?.buttonBgColor?.hex &&
              pageSettings.buttonBgColor.hex}
            style:color={pageSettings?.buttonTextColor?.hex &&
              pageSettings.buttonTextColor.hex}
            type="submit"
            class="text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-full   px-5 py-2.5 text-center "
            >Update user info</button
          >
        </form>
      {/if}

      <form action="/logout" method="post" class="w-full mt-10">
        <button
          style:background-color={pageSettings?.buttonBgColor?.hex &&
            pageSettings.buttonBgColor.hex}
          style:color={pageSettings?.buttonTextColor?.hex &&
            pageSettings.buttonTextColor.hex}
          type="submit"
          class="text-white  bg-shop-purple font-lato text-base font-bold hover:bg-shop-pink focus:ring-4 focus:outline-none focus:ring-blue-300  w-auto block ml-auto  px-8 py-2.5 text-center "
          >Logout</button
        >
      </form>
    </div>
  {/if}
</div>
