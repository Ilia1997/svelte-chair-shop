import { AuthApiError } from "@supabase/supabase-js";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../../(public)/$types";

export const load: PageServerLoad = async ({ locals }) => {
   const { data, error: err } = await locals.sb.from("orders").select();

   if (err) {
      if (err instanceof AuthApiError && err.status == 500) {
         return { error: true, message: "Api error" };
      } else {
         return { error: true, message: err.message };
      }
   }

   return { orders: data };
};
