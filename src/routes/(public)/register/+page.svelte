<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import { slide } from "svelte/transition";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  export let form: ActionData;
  let emailError: any, passError: any;
  const resetForm = () => {
    form = null;
  };
  $: {
    emailError = form?.error?.email || form?.error?.all;
    passError = form?.error?.password || form?.error?.all;
  }
</script>

<main>
  <BreadCrumbs
    data={{
      heading: "My Account",
      li: {
        0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
        1: {
          name: "Create account",
          path: "/register",
          class: "text-shop-pink hover:text-blue-700",
        },
      },
    }}
  />
  <div class="container pb-6">
    {#if form?.success}
      <div
        class="flex place-items-center flex-col px-12 py-24 mx-auto my-6 rounded-xl shadow-base max-w-lg"
      >
        <h2
          style:color={pageSettings?.textHeadingColor?.hex &&
            pageSettings.textHeadingColor.hex}
        >
          Welcome to our app
        </h2>
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="mt-4"
        >
          Please check your email to confirm registration
        </p>
      </div>
    {:else}
      <div class="p-12 mx-auto my-24 max-w-xl shadow-base-big">
        <h2
          style:color={pageSettings?.textHeadingColor?.hex &&
            pageSettings.textHeadingColor.hex}
          class="mx-auto text-3xl font-josefin font-bold  text-center"
        >
          Create account
        </h2>
        <p
          style:color={pageSettings?.textColor?.hex &&
            pageSettings.textColor.hex}
          class="font-lato text-base text-[#9096B2] mt-2 mb-9 mx-auto text-center"
        >
          Please create account using form bellow.
        </p>
        <form action="?/register" method="POST" use:enhance>
          <div class="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              on:focus={resetForm}
              class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
            {emailError
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              placeholder="Email Address"
              required
            />
            {#if form?.error?.email}
              <p class="text-sm text-red-600 mt-1" transition:slide|local>
                {form?.error?.email}
              </p>
            {/if}
          </div>
          <div class="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              on:focus={resetForm}
              class="bg-gray-50 border  text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px]
            {passError
                ? 'border-red-600 text-red-600'
                : 'border-gray-300 text-gray-900'}"
              required
            />
            {#if form?.error?.password}
              <p
                style:color={pageSettings?.textColor?.hex &&
                  pageSettings.textColor.hex}
                class="text-sm text-red-600 mt-1"
                transition:slide|local
              >
                {form?.error?.password}
              </p>
            {/if}
            {#if form?.error?.all}
              <p
                style:color={pageSettings?.textColor?.hex &&
                  pageSettings.textColor.hex}
                class="text-sm text-red-600 mt-1"
                transition:slide|local
              >
                {form?.error?.all}
              </p>
            {/if}
          </div>

          <div>
            <button
              style:background-color={pageSettings?.buttonBgColor?.hex &&
                pageSettings.buttonBgColor.hex}
              style:color={pageSettings?.buttonTextColor?.hex &&
                pageSettings.buttonTextColor.hex}
              type="submit"
              class="text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-full   px-5 py-2.5 text-center "
              >Sign Up</button
            >
            <div
              style:color={pageSettings?.textColor?.hex &&
                pageSettings.textColor.hex}
              class="flex justify-center text-shop-grey font-lato mt-7"
            >
              Already have an Account?<a
                style:color={pageSettings?.linkColor?.hex &&
                  pageSettings.linkColor.hex}
                href="/login"
                class="ml-1 hover:text-shop-purple transition-colors"
              >
                Sign In</a
              >
            </div>
          </div>
        </form>
      </div>
    {/if}
  </div>
</main>
