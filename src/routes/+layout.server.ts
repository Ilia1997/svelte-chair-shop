import type { LayoutServerLoad } from "./$types";
import client from "../sanityClient";
import { getServerSession } from "@supabase/auth-helpers-sveltekit";

export const load: LayoutServerLoad = async (event) => {
  const queryProjectSettings = `*[_type == "globalSettings"]`;

  let projectSettings = await client.fetch(queryProjectSettings);
  if (projectSettings) {
    return {
      session: await getServerSession(event),
      projectSettings,
    };
  }
  return {
    session: await getServerSession(event),
  };
};
