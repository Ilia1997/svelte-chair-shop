import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanityClient";

export function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}


