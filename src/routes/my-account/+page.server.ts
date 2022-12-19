import type { PageServerLoad } from "./$types";
import { getServerSession } from "@supabase/auth-helpers-sveltekit";

export const load: PageServerLoad = async (event) => {
  return {
    session: await getServerSession(event),
  };
};
