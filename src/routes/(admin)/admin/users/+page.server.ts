import { AuthApiError } from "@supabase/supabase-js";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../../(public)/$types";

export const load: PageServerLoad = async ({ locals }) => {
  
   const { data, error: err } = await locals.sb.from("profiles").select();

   if (err) {
      if (err instanceof AuthApiError && err.status == 500) {
         return { error: true, message: "Api error" };
      } else {
         return { error: true, message: err.message };
      }
   }

   return { users: data };
};

export const actions: Actions = {
   update_user: async ({ request, locals }) => {
      //console.log(await request.formData());
      //const body = Object.fromEntries(await request.formData());

      const { data, error: err } = await locals.sb
         .from("profiles")
         .update({ first_name: "otherValu4444" })
         .eq("id", "6b811f4a-f7b0-4c84-8587-cdf1f38d5e62");
      console.log("🚀 ~ file: +page.server.ts:30 ~ update_user: ~ data", data);
      console.log("🚀 ~ file: +page.server.ts:26 ~ update_user: ~ err", err);

      if (err) throw err;
      return { success: true };
   },
};
