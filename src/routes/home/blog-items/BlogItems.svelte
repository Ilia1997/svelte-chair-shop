<script lang="ts">
  import Blog_1 from "$lib/assets/blog-1.jpg";
  import Blog_2 from "$lib/assets/blog-2.jpg";
  import Blog_3 from "$lib/assets/blog-3.jpg";
  import Pen_ico from "$lib/assets/pen-ico.svg";
  import Date_ico from "$lib/assets/calendar.svg";
  import type { BlogItem } from "$lib/interfaces/interface";

  const items: Array<BlogItem> = [
    {
      name: "Top esssential Trends in 2021",
      date: "21 August,2020",
      image: Blog_1,
      author: "SaberAli",
      shortDesc:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      name: "Top esssential Trends in 2021",
      date: "21 August,2020",
      image: Blog_2,
      author: "Surfauxion",
      shortDesc:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      name: "Top esssential Trends in 2021",
      date: "21 August,2020",
      image: Blog_3,
      author: "SaberAli",
      shortDesc:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
  ];
</script>

<div class="py-[96px]">
  <h2 class="pb-20 text-center">Leatest Blog</h2>
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[53px]">
      {#each items as item}
        <a href="#">
          <div class=" shadow-base rounded-md bg-white group">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="rounded-md overflow-hidden">
              <img
                src={item.image}
                alt="blog image "
                class="group-hover:scale-105 transition-transform w-full"
              />
            </div>

            <div class="px-5 pb-7">
              <div class="flex pt-5 pb-7 ">
                <div class="flex">
                  <img src={Pen_ico} alt="decorative" />
                  <span class="text-sm leading-4 text-shop-off-blue ml-2"
                    >{item.author}</span
                  >
                </div>
                <div class="flex ml-7">
                  <img src={Date_ico} alt="decorative" />
                  <span class="text-sm leading-4 text-shop-off-blue ml-2"
                    >{item.date}</span
                  >
                </div>
              </div>
              <div class="text-shop-off-blue text-lg leading-[21px] pb-4">
                {item.name}
              </div>
              <div
                class="text-base text-[#72718F] leading-7 font-lato font-normal"
              >
                {item.shortDesc}
              </div>
              <div
                class="font-lato text-base leading-7 mt-3.5 text-shop-off-blue underline underline-offset-2 group-hover:text-shop-purple"
              >
                Read More
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
