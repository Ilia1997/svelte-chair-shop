import { AuthApiError } from "@supabase/gotrue-js";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  register: async ({ request, locals }) => {
    //console.log(await request.formData());
    const body = Object.fromEntries(await request.formData());
    console.log("🚀 ~ file: +page.server.ts:6 ~ register: ~ body", body);
    const { data, error: err } = await locals.sb.auth.signUp({
      email: body.email as string,
      password: body.password as string,
    });
    if (err) {
      if (err instanceof AuthApiError && err.status == 400) {
      }
    }
  },
};
