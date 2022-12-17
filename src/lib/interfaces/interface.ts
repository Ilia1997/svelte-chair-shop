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
  price: number;
  main_image: any;
  body?: any;
  slug: ISlug;
  is_sale?: boolean;
  old_price?: number;
  // seo
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: string;
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
  main_image: any;
  author: IAuthor;
  short_desc: string;
  body: any;
}
