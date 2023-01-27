import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { AuthApiError, type UserAttributes } from "@supabase/supabase-js";

export const POST: RequestHandler = async ({ request, locals }) => {
  const { password, password_2 } = Object.fromEntries(await request.formData());

  if (password != password_2) {
    return json({ error: true, message: "Passwords doesn`t match" });
  }

  const { data, error: err } = await locals.sb.auth.updateUser({
    password: password as string,
  });
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
