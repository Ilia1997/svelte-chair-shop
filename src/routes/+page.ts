import type { PageLoad } from "./$types";

export const load: PageLoad = ({ data }) => {
  if (data) {
    return data;
  }
};
