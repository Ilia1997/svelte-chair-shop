import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const load: PageServerLoad = async ({ locals }) => {
  const session = locals.session;
  const { data } = await locals.sb
    .from("profiles")
    .select("id, first_name, last_name, country, city, address, postal_code")
    .eq("id", session?.user.id)
    .single();
  const userData = await locals.sb.auth.getUser();

  if (userData?.data?.user) {
    return {
      profileData: { ...data },
      userData: {
        email: userData.data.user.email,
        phone: userData.data.user.phone,
      },
    };
  }
};
export const actions: Actions = {
  update_profile: async ({ request, locals }) => {
    const session = locals.session;

    const formFields = await request.formData();
    let body = Object.fromEntries(formFields);

    const updates = {
      id: session?.user.id,
      first_name: body.first_name,
      last_name: body.last_name,
      country: body.country,
      city: body.city,
      address: body.address,
      postal_code: body.postal_code,
      updated_at: new Date(),
    };

    let updatedUser = await locals.sb.from("profiles").upsert(updates);

    if (updatedUser.error) throw updatedUser.error;

    return { success: true };
  },
  update_email: async ({ request, locals }) => {
    const { email } = Object.fromEntries(await request.formData());

    let { data, error: err } = await locals.sb.auth.updateUser({
      email: email as string,
    });

    if (err) {
      if (err instanceof AuthApiError && err.status == 500) {
        return { error: true, message: "Api error" };
      } else {
        console.log(err);
        return { error: true, message: err.message };
      }
    }

    return { success: true };
  },
  update_user_password: async ({ request, locals }) => {
    const { password, password_2 } = Object.fromEntries(
      await request.formData()
    );

    if (password != password_2) {
      return { error: true, message: "Passwords doesn`t match" };
    }

    const { data, error: err } = await locals.sb.auth.updateUser({
      password: password as string,
    });
    if (err) {
      console.log(err);
      if (err instanceof AuthApiError && err.status == 500) {
        return { error: true, message: "Api error" };
      } else {
        return { error: true, message: err.message };
      }
    }

    return { success: true };
  },
};
