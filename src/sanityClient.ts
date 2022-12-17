import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "n34u9jpz",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false`
});

export default client;
