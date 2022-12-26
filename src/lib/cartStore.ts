import { browser } from "$app/environment";
import { writable } from "svelte/store";
import type { IProduct } from "./interfaces/interface";
const localStorageData = browser && localStorage.getItem("products");
// @ts-ignore
const storedProducts: Array<IProduct> = JSON.parse(localStorageData) || [];
export const productsInCart = writable(browser && storedProducts);
productsInCart.subscribe((val) => {
  browser && (localStorage.products = JSON.stringify(val));
});
