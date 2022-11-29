export interface ISlides {
  title: string;
  heading: string;
  description: string;
  sale: number;
  link: string;
  image: string;
}
export interface IProduct {
  name: string;
  code: string;
  price: number;
  image: string;
  isSale?: boolean;
  oldPrice?: number;
}
export interface ITabs {
  label: string;
  value: number;
  component: any;
}
export interface ICategory {
  name: string;
  image: string;
}
export interface BlogItem {
  name: string;
  date: string;
  image: string;
  author: string;
  shortDesc: string;
}
