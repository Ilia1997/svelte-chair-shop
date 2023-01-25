import type { PageServerLoad } from "./$types";
import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
  const session = locals.session;
  const { data } = await locals.sb
    .from("profiles")
    .select("id, username, full_name, avatar_url, website")
    .eq("id", session?.user.id)
    .single();
  const file = await locals.sb.storage
    .from("avatars")
    .download(data?.avatar_url);

  if (file.error) {
    return { userData: { ...data, file: "" } };
  }

  const fileUrl = await locals.sb.storage
    .from("avatars")
    .getPublicUrl(data?.avatar_url);

  return { userData: { ...data, file: fileUrl.data.publicUrl } };
};
export const actions: Actions = {
  update_user: async ({ request, locals }) => {
    const session = locals.session;

    const formFields = await request.formData();
    let body = Object.fromEntries(formFields);

    // @ts-ignore
    const fileExt = body.avatar_url?.type.split("/").pop();
    const filePath = `${(Math.random() * 100000000).toFixed(0)}.${fileExt}`;
    const imageRes = await locals.sb.storage
      .from("avatars")
      .upload(filePath, body.avatar_url, {
        upsert: false,
      });

    if (imageRes.error) {
      //@ts-ignore
      if (imageRes.error.statusCode == 409) {
        return fail(500, { error: "Server error. Please try later." });
      }
      //@ts-ignore
      return fail(imageRes.error.statusCode, { error: imageRes.error.message });
    }

    const updates = {
      id: session?.user.id,
      username: body.username,
      website: body.website,
      full_name: body.full_name,
      avatar_url: imageRes.data.path,
      updated_at: new Date(),
    };

    let updatedUser = await locals.sb.from("profiles").upsert(updates);

    if (updatedUser.error) throw updatedUser.error;

    return { updateUserStatus: true };
  },
};
