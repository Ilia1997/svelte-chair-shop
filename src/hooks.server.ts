import "$lib/supabase";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const { session, supabaseClient } = await getSupabase(event);
  event.locals.sb = supabaseClient;
  event.locals.session = session;

  if (event.url.pathname.startsWith("/my-account")) {
    if (!session) {
      throw redirect(303, "/login");
    } else if (session?.user?.app_metadata?.claims_admin) {
      throw redirect(303, "/admin/dashboard");
    }
  }
  if (event.url.pathname.startsWith("/admin")) {
    if (!session) {
      throw redirect(303, "/login");
    }
  }
  if (event.url.pathname.startsWith("/login")) {
    if (session) {
      if (session?.user?.app_metadata?.claims_admin) {
        throw redirect(303, "/admin/dashboard");
      } else {
        throw redirect(303, "/my-account/personal-data");
      }
    }
  }
  return resolve(event);
};
