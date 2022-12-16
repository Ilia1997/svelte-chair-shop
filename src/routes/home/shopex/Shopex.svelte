<script lang="ts">
  import DeliverImg from "$lib/assets/shopex-icon/free-delivery.svg";
  import CashbackImg from "$lib/assets/shopex-icon/premium-quality.svg";
  import PremiumImg from "$lib/assets/shopex-icon/24-hours-support.svg";
  import SupportImg from "$lib/assets/shopex-icon/cashback.svg";
  interface Shopex {
    image: string;
    name: string;
    description: string;
  }
  const items: Array<Shopex> = [
    {
      image: DeliverImg,
      name: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: CashbackImg,
      name: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: PremiumImg,
      name: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: SupportImg,
      name: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];
</script>

<div class="pb-[135px]">
  <h2 class="pb-14 text-center">What Shopex Offer!</h2>
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {#each items as element}
        <div
          class="pt-14 pb-11 px-6 bg-white shadow-md flex flex-col justify-center items-center"
        >
          <img
            src={element.image ? element.image : "/images/no-image.png"}
            alt="delivery"
            class="mb-6 w-[65px]"
          />
          <div class="text-[22px] leading-6 text-shop-off-blue mb-5">
            {element.name}
          </div>
          <p class="text-[#1A0B5B] opacity-30 text-center">
            {element.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
