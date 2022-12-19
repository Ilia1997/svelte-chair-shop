<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import { slide } from "svelte/transition";
  import { error } from "@sveltejs/kit";
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
  <div class="container pb-6">
    <h1 class="mb-3">Login</h1>
    <form action="?/login" method="POST" use:enhance>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 "
          >Your email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          on:focus={resetForm}
          class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px] 
          {emailError
            ? 'border-red-600 text-red-600'
            : 'border-gray-300 text-gray-900'}"
          placeholder="name@flowbite.com"
          required
        />
        {#if form?.error?.email}
          <p class="text-sm text-red-600 mt-1" transition:slide|local>
            {form?.error?.email}
          </p>
        {/if}
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 "
          >Your password</label
        >
        <input
          type="password"
          id="password"
          name="password"
          on:focus={resetForm}
          class="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px]
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
      <div class="flex items-center">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Submit</button
        >
        <div class="flex ml-4">
          or<a
            href="/register"
            class="ml-1 hover:text-shop-purple transition-colors"
          >
            Sign up</a
          >
        </div>
      </div>
    </form>
  </div>
</main>
