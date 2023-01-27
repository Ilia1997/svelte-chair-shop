import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const POST: RequestHandler = async ({ request, locals, url }) => {
  const { email } = Object.fromEntries(await request.formData());

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      "http://127.0.0.1:5173";
    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;
    // Make sure to including trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
  };

  const { data, error: err } = await locals.sb.auth.resetPasswordForEmail(
    email as string,
    {
      redirectTo: `${getURL()}reset-password`,
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
