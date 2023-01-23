import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { AuthApiError } from "@supabase/gotrue-js";
import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
  addAddresAndShopingDetail: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    // console.log(
    //   "🚀 ~ file: +page.server.ts:9 ~ addAddresAndShopingDetail: ~ body",
    //   body
    // );
    locals.shopingDetails = body;
    // const { data, error: err } = await locals.sb.from("Orders").insert([
    //   {
    //     email_or_phone: body.email_or_phone,
    //     first_name: body.first_name,
    //     last_name: body.last_name,
    //     address: body.address,
    //     city: body.city,
    //     country: body.country,
    //     postal_code: body.postal_code,
    //   },
    // ]);
    // console.log(
    //   "🚀 ~ file: +page.server.ts:22 ~ const{data,error:err}=awaitlocals.sb.from ~ data",
    //   data
    // );
    // if (err) {
    //   console.log(err);
    //   if (err instanceof AuthApiError && err.status == 500) {
    //     return fail(500, {
    //       error: {
    //         email: "",
    //         password: "",
    //         all: "Server error. Please try again later.",
    //       },
    //     });
    //   }
    // }
    return { success: true };
  },
};
