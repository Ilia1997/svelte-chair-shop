import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const POST: RequestHandler = async ({ request, locals, url }) => {
  const { email } = Object.fromEntries(await request.formData());

  const { data, error: err } = await locals.sb.auth.resetPasswordForEmail(
    email as string,
    {
      redirectTo: `${url.origin}/reset-password/`,
    }
  );
  console.log(
    "🚀 ~ file: +server.ts:14 ~ constPOST:RequestHandler= ~ data",
    data
  );
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
