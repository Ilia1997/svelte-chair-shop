import { AuthApiError } from "@supabase/gotrue-js";
import { fail, redirect, type Actions } from "@sveltejs/kit";

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
        return fail(400, {
          error: { email: "", password: "", all: "Invalid email or password" },
        });
      } else if (err instanceof AuthApiError && err.status == 422) {
        return fail(500, {
          error: {
            email: "",
            password: "Password should be at least 6 characters",
            all: "",
          },
        });
      }
      return fail(500, {
        error: {
          email: "",
          password: "",
          all: "Server error. Please try again later.",
        },
      });
    }
    return { success: true };
  },
};
