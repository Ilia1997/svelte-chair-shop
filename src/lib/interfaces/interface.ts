export interface ISlides {
  title: string;
  heading: string;
  description: string;
  isSale: boolean;
  sale: number;
  link: string;
  image: any;
}
interface ISlug {
  current: string;
}
export interface IProduct {
  name: string;
  code: string;
  short_desc?: string;
  price: number;
  main_image: any;
  body?: any;
  slug: ISlug;
  is_sale?: boolean;
  old_price?: number;
  related?: any;
  features?: any;
  // seo
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: string;
  content?: any;
  // cart
  quantity?: number;
  total?: number;
}

export interface AddToCartType {
  (item: IProduct): void;
}
export interface ITabs {
  label: string;
  value: number;
  component: any;
}
export interface ICategory {
  title: string;
  main_image: any;
}
interface IAuthor {
  name: string;
}

export interface BlogItem {
  title: string;
  _createdAt: string;
  publishedAt: string;
  main_image?: any;
  slug: any;
  author: IAuthor;
  short_desc?: string;
  body?: any;
  // seo
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: string;
}

export interface IPageSettings {
  logotype?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  textColor?: any;
  textHeadingColor?: any;
  linkColor?: any;
  buttonTextColor?: any;
  buttonBgColor?: any;
  bgCrumbs?: any;
  bgMainColor1?: any;
  bgMainColor2?: any;
  // seo
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: string;
}
