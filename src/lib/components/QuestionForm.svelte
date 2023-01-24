<script lang="ts">
  import { enhance } from "$app/forms";

  import { fade } from "svelte/transition";
  import type { ActionData } from "../../routes/$types";

  export let form: ActionData;
  export let currentUrl: string;
  export let pageSettings: any;

  let formSubmited: boolean = false;

  const resetForm = () => {
    form = null;
  };
</script>

{#if formSubmited}
  <h4
    in:fade
    style:color={pageSettings?.textHeadingColor?.hex &&
      pageSettings.textHeadingColor.hex}
    class="text-xl"
  >
    Thank You for your question! <br />
    We will ask you soon!
  </h4>
{:else}
  <form
    method="POST"
    action="{currentUrl}?/question"
    use:enhance={({ form, data, action, cancel }) => {
      return async ({ result, update }) => {
        // @ts-ignore
        if (result?.data.success == true) {
          formSubmited = true;
        }
      };
    }}
  >
    <div class="md:flex justify-between">
      <div class="mb-6 md:max-w-[48%] w-full">
        <input
          type="text"
          id="username"
          name="username"
          on:focus={resetForm}
          class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px]"
          placeholder="Your Name*"
          required
        />
      </div>
      <div class="mb-6 md:max-w-[48%] w-full">
        <input
          type="email"
          id="email"
          name="email"
          on:focus={resetForm}
          class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px]"
          placeholder="Your E-mail*"
          required
        />
      </div>
    </div>
    <div class="mb-6 w-full">
      <input
        type="text"
        id="subject"
        name="subject"
        on:focus={resetForm}
        class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[40px]"
        placeholder="Subject*"
        required
      />
    </div>
    <div class="mb-6 w-full">
      <textarea
        id="message"
        name="message"
        on:focus={resetForm}
        class="bg-gray-50 border  text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  min-h-[140px]"
        placeholder="Type Your Message*"
        required
      />
    </div>
    <div>
      <button
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        type="submit"
        class="w-[max-content] text-white bg-shop-pink font-lato text-base font-bold hover:bg-shop-purple focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center "
        >Send Mail</button
      >
    </div>
  </form>
{/if}
