import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import client from "$lib/sanityClient";
import type { IProduct } from "$lib/interfaces/interface";
import { AuthApiError } from "@supabase/supabase-js";

export const POST: RequestHandler = async ({ request, locals }) => {
   const { userData } = await request.json();

   const dateToUpdate = Object.fromEntries(
      Object.entries(userData).filter((item) => {
         if (item[0] != "id") {
            return item;
         }
      })
   );
   const { data, error: err } = await locals.sb
      .from("profiles")
      .update(dateToUpdate)
      .eq("id", userData.id);

   if (err) {
      console.log(err);
      if (err instanceof AuthApiError && err.status == 500) {
         return json({ error: true, message: "Api error" });
      } else {
         return json({ error: true, message: err.message });
      }
   }

   return json({ success: true });
};
