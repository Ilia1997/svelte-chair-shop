<script lang="ts">
  import type { PageData } from "./$types";
  let errorData: boolean = false,
    imageIsSet: boolean = false;
  export let data: PageData;
  console.log(data);
  import AvatarImage from "$lib/assets/account-avatar.webp";
</script>

<div class="container py-6">
  {#if data.session}
    <div
      class="flex place-items-center flex-col px-12 py-24 mx-auto my-6 rounded-xl shadow-base max-w-[800px]"
    >
      <div class="flex">
        <div class="w-20 h-20">
          {#if imageIsSet}
            <img src={AvatarImage} alt="" class="w-full rounded-full" />
          {:else}
            <div
              class=" bg-gray-500 rounded-full flex justify-center items-center w-full h-full"
            >
              <img src={AvatarImage} alt="" class="max-w-[50px]" />
            </div>
          {/if}
        </div>
      </div>
      <div class="mt-4">Welcome {data.session.user.email}</div>

      <form action="/update-user" method="post" class="mt-5 mb-5 w-full">
        <div class="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px] 
      {errorData
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Change email"
            required
          />
        </div>
        <div class="mb-6">
          <input
            type="text"
            id="username"
            name="username"
            class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px] 
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
            class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px] 
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
            class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px] 
    {errorData
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Set website url"
            required
          />
        </div>
        <div class="mb-6">
          <input
            type="file"
            id="avatar_url"
            name="avatar_url"
            class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  min-h-[40px] 
    {errorData
              ? 'border-red-600 text-red-600'
              : 'border-gray-300 text-gray-900'}"
            placeholder="Upload avatar image"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Update user info</button
        >
      </form>
      <form action="/logout" method="post">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Logout</button
        >
      </form>
    </div>
  {/if}
</div>
