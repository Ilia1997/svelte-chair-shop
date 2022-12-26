import { AuthApiError } from "@supabase/gotrue-js";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request, locals }) => {
    //console.log(await request.formData());
    const body = Object.fromEntries(await request.formData());

    const { data, error: err } = await locals.sb.auth.signInWithPassword({
      email: body.email as string,
      password: body.password as string,
    });
    if (err) {
      if (err instanceof AuthApiError && err.status == 400) {
        return fail(400, {
          error: { email: "", password: "", all: "Invalid credentials" },
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
    throw redirect(303, "/my-account");
  },
};
