<script lang="ts">
  import { slide } from "svelte/transition";
  import { enhance } from "$app/forms";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
  import { getContext } from "svelte";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  let formData: any;
  const resetForm = () => {
    formData = null;
  };
</script>

<BreadCrumbs
  data={{
    heading: "Reset password",
    li: {
      0: { name: "Home", path: "/", class: "text-black hover:text-blue-700" },
      1: {
        name: "Reset password",
        path: "/reset-password/set-email",
        class: "text-shop-pink hover:text-blue-700",
      },
    },
  }}
/>
<div class="container pb-6">
  <div class="p-12 mx-auto my-24 max-w-xl shadow-base-big">
    {#if formData?.success}
      <h2
        style:color={pageSettings?.textHeadingColor?.hex &&
          pageSettings.textHeadingColor.hex}
        class="mx-auto text-3xl font-josefin font-bold  text-center"
      >
        Your password successfully changed!
      </h2>
    {:else}
      <h2
        style:color={pageSettings?.textHeadingColor?.hex &&
          pageSettings.textHeadingColor.hex}
        class="mx-auto text-3xl font-josefin font-bold  text-center"
      >
        Reset password
      </h2>
      <form
        action="/reset-password/update-user"
        method="POST"
        use:enhance={({ form, data, action, cancel }) => {
          return async ({ result, update }) => {
            console.log("🚀 ~ file: +page.svelte:42 ~ return ~ result", result);
            // @ts-ignore
            formData = result;
          };
        }}
      >
        <div class="mb-6 mt-8">
          <input
            type="password"
            id="password"
            name="password"
            on:focus={resetForm}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
          {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Enter Password"
            required
          />
          {#if formData?.error}
            <p class="text-sm text-red-600 mt-1" transition:slide|local>
              {formData?.message}
            </p>
          {/if}
        </div>
        <div class="mb-6">
          <input
            type="password"
            id="password_2"
            name="password_2"
            on:focus={resetForm}
            class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px] 
          {formData?.error
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Confirm Password"
            required
          />
          {#if formData?.error}
            <p class="text-sm text-red-600 mt-1" transition:slide|local>
              {formData?.message}
            </p>
          {/if}
        </div>
        <button
          style:color={pageSettings?.linkColor?.hex &&
            pageSettings.linkColor.hex}
          type="submit"
          class="text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-full   px-5 py-2.5 text-center "
          >Set new password</button
        >
      </form>
    {/if}
  </div>
</div>
