// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  interface PageData {}
  // interface Error {}
  // interface Platform {}
  interface ISlides {
    title: string;
    heading: string;
    description: string;
    sale: number;
    link: string;
    image: string;
  }
}
declare module "svelte-carousel";
declare module "swiper/swiper-bundle.esm.js";
