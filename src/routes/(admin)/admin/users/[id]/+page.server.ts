import client from "$lib/sanityClient";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/(public)/$types";
import { AuthApiError } from "@supabase/supabase-js";

export const load = (async ({ params, locals }) => {
   let userId = params.id;

   const userProfile = await locals.sb.from("profiles").select().eq("id", userId);

   if (userProfile.error) {
      if (userProfile.error instanceof AuthApiError && userProfile.error.status == 500) {
         return { error: true, message: "Api error" };
      } else {
         return { error: true, message: userProfile.error.message };
      }
   }

   const orders = await locals.sb.from("orders").select().eq("user_id", userId);
   if (orders.error) {
      if (orders.error instanceof AuthApiError && orders.error.status == 500) {
         return { error: true, message: "Api error" };
      } else {
         return { error: true, message: orders.error.message };
      }
   }

   return { user: userProfile.data, orders: orders.data };
}) satisfies PageServerLoad;
