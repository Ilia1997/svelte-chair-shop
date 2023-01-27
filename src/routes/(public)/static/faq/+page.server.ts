import type { PageServerLoad } from "./$types";
import client from "$lib/sanityClient";
import { AuthApiError } from "@supabase/gotrue-js";
import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  question: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    const { data, error: err } = await locals.sb.from("QuestionForm").insert({
      user_name: body.username,
      user_email: body.email,
      form_subject: body.subject,
      form_body: body.message,
    });
    if (err) {
      console.log(err);
      if (err instanceof AuthApiError && err.status == 500) {
        return fail(500, {
          error: {
            email: "",
            password: "",
            all: "Server error. Please try again later.",
          },
        });
      }
    }
    return { success: true };
  },
};

export const load = (async () => {
  const queryPageInfo = `*[_type == "FAQ"] {
    question,
    answer,
    seoTitle, 
    seoDesc, 
    seoKeywords
  }`;

  let pageInfo = await client.fetch(queryPageInfo);

  if (pageInfo) {
    return { pageInfo };
  }
}) satisfies PageServerLoad;
