<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import { slide } from "svelte/transition";
  import { error } from "@sveltejs/kit";
  import BreadCrumbs from "$lib/components/BreadCrumbs.svelte";
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
          name: "Login",
          path: "/login",
          class: "text-shop-pink hover:text-blue-700",
        },
      },
    }}
  />
  <div class="container pb-6">
    <div class="p-12 mx-auto my-24 max-w-xl shadow-base-big">
      <h2 class="mx-auto text-3xl font-josefin font-bold  text-center">
        Login
      </h2>
      <p
        class="font-lato text-base text-[#9096B2] mt-2 mb-9 mx-auto text-center"
      >
        Please login using account detail bellow.
      </p>
      <form action="?/login" method="POST" use:enhance>
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
        <div class="mb-3">
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
            <p class="text-sm text-red-600 mt-1" transition:slide|local>
              {form?.error?.password}
            </p>
          {/if}
          {#if form?.error?.all}
            <p class="text-sm text-red-600 mt-1" transition:slide|local>
              {form?.error?.all}
            </p>
          {/if}
        </div>
        <a
          href="reset-password"
          class="font-lato text-base text-shop-grey hover:text-shop-purple transition-colors mb-4 block"
          >Forgot your password?</a
        >
        <div>
          <button
            type="submit"
            class="text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300  w-full   px-5 py-2.5 text-center "
            >Sign In</button
          >
          <div class="flex justify-center text-shop-grey font-lato mt-7">
            Don’t have an Account?<a
              href="/register"
              class="ml-1 hover:text-shop-purple transition-colors"
            >
              Create account</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</main>
