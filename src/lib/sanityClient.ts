import sanityClient from "@sanity/client";
import {
  PUBLIC_SANITY_EDITOR_TOKEN
} from "$env/static/public";

const client = sanityClient({
  projectId: "n34u9jpz",
  dataset: "production",
  token: PUBLIC_SANITY_EDITOR_TOKEN,
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false`
});

export default client;
