<script lang="ts">
  import { page } from "$app/stores";
  import { getContext } from "svelte";
  import { enhance } from "$app/forms";
  import { fade } from "svelte/transition";
  import { generateRatingStars } from "$lib/functions/generateRatingStars";
  import type { IPageSettings } from "$lib/interfaces/interface";
  const pageSettings: IPageSettings = getContext("pageSettings");
  const productNameForComments = `${$$props?.productName} ${(
    Math.random() +
    Date.now() +
    1
  ).toString()}`;
  let formSubmited: boolean = false;

  const fillStar = (event: any) => {
    let labels = event.target.parentNode.getElementsByTagName("label");
    let labelsArr = [...labels];

    for (let i = 0; i < labels.length; ++i) {
      switch (labelsArr.indexOf(event.target)) {
        case 0:
          labels[0].textContent = "★";
          labels[1].textContent = "☆";
          labels[2].textContent = "☆";
          labels[3].textContent = "☆";
          labels[4].textContent = "☆";
          break;
        case 1:
          labels[0].textContent = "★";
          labels[1].textContent = "★";
          labels[2].textContent = "☆";
          labels[3].textContent = "☆";
          labels[4].textContent = "☆";
          break;
        case 2:
          labels[0].textContent = "★";
          labels[1].textContent = "★";
          labels[2].textContent = "★";
          labels[3].textContent = "☆";
          labels[4].textContent = "☆";
          break;
        case 3:
          labels[0].textContent = "★";
          labels[1].textContent = "★";
          labels[2].textContent = "★";
          labels[3].textContent = "★";
          labels[4].textContent = "☆";
          break;
        case 4:
          labels[0].textContent = "★";
          labels[1].textContent = "★";
          labels[2].textContent = "★";
          labels[3].textContent = "★";
          labels[4].textContent = "★";
          break;
      }
    }
  };
</script>

{#if !$$props?.productReviews?.length}
  <h2
    style:color={pageSettings?.textHeadingColor?.hex &&
      pageSettings.textHeadingColor.hex}
    class="text-shop-navy-blue"
  >
    No reviews yet
  </h2>
{:else}
  <h2
    style:color={pageSettings?.textHeadingColor?.hex &&
      pageSettings.textHeadingColor.hex}
    class="text-shop-navy-blue"
  >
    All reviews
  </h2>
  {#each $$props.productReviews as item}
    <div class="comment-item p-4 mb-4 rounded bg-white">
      <div>{item.author}</div>
      <div>{item.email}</div>
      {#if item.rating}
        {generateRatingStars(+item.rating)}
      {/if}
      <div
        class="mt-2"
        style:color={pageSettings?.textHeadingColor?.hex &&
          pageSettings.textHeadingColor.hex}
      >
        {item.review}
      </div>
    </div>
  {/each}
{/if}
<div>
  {#if formSubmited}
    <h4
      in:fade
      style:color={pageSettings?.textHeadingColor?.hex &&
        pageSettings.textHeadingColor.hex}
      class="text-xl text-center mt-8"
    >
      Thank You for your comment! <br />
    </h4>
  {:else}
    <h3 class="text-center mt-8 mb-2 text-3xl">Add new comment</h3>
    <form
      action="{$page.url.href}?/addComment"
      method="POST"
      use:enhance={({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          // @ts-ignore
          if (result?.data.success == true) {
            formSubmited = true;
          }
        };
      }}
      class="relative w-full max-w-[560px] mb-8 mx-auto"
    >
      <div>
        <input type="hidden" name="_type" value="product_reviews" />
        <input type="hidden" name="title" value={productNameForComments} />
      </div>

      <div>
        <input
          type="text"
          name="author"
          placeholder="Enter Username"
          class="bg-white border mb-6 text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 min-h-[40px]"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          class="bg-white border mb-6 text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 min-h-[40px]"
          required
        />
      </div>
      <div>
        <textarea
          class="bg-white border mb-6 text-gray-900 text-base font-lato rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 min-h-[120px]"
          name="review"
          placeholder="Enter Message"
          required
        />
      </div>
      <div class="mb-6">
        <span>Rate the product:</span>
        <input hidden type="radio" id="rating1" name="rating" value="1" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <label
          class="cursor-pointer hover:text-orange-400"
          on:click={fillStar}
          for="rating1">☆</label
        >
        <input hidden type="radio" id="rating2" name="rating" value="2" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <label
          class="cursor-pointer hover:text-orange-400"
          on:click={fillStar}
          for="rating2">☆</label
        >
        <input hidden type="radio" id="rating3" name="rating" value="3" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <label
          class="cursor-pointer hover:text-orange-400"
          on:click={fillStar}
          for="rating3">☆</label
        >
        <input hidden type="radio" id="rating4" name="rating" value="4" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <label
          class="cursor-pointer hover:text-orange-400"
          on:click={fillStar}
          for="rating4">☆</label
        >
        <input hidden type="radio" id="rating5" name="rating" value="5" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <label
          class="cursor-pointer hover:text-orange-400"
          on:click={fillStar}
          for="rating5">☆</label
        >
      </div>
      <button
        style:background-color={pageSettings?.buttonBgColor?.hex &&
          pageSettings.buttonBgColor.hex}
        style:color={pageSettings?.buttonTextColor?.hex &&
          pageSettings.buttonTextColor.hex}
        type="submit"
        class="border border-current text-[#EEEFFB] text-base bg-shop-pink hover:bg-shop-purple rounded-[3px] leading-5 font-lato px-10 py-2.5"
        >Add comment</button
      >
    </form>
  {/if}
</div>
