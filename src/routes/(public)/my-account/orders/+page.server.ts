import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const load: PageServerLoad = async ({ locals }) => {
   const session = locals.session;
   const { data, error: err } = await locals.sb.from("orders").select();

   if (err) {
      if (err instanceof AuthApiError && err.status == 500) {
         return { error: true, message: "Api error" };
      } else {
         return { error: true, message: err.message };
      }
   }

   return { previousOrders: data };
};
