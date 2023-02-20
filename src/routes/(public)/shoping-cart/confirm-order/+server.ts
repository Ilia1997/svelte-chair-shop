import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import client from "$lib/sanityClient";
import type { IProduct } from "$lib/interfaces/interface";
import { AuthApiError } from "@supabase/supabase-js";

export const POST: RequestHandler = async ({ request, locals }) => {
   const {
      productsInCart,
      form,
      total,
   }: { productsInCart: Array<IProduct>; form: any; total: number } = await request.json();

   const {
      data: { user },
   } = await locals.sb.auth.getUser();

  const productIds = productsInCart.map((product) => product.code).toString();
  const { data, error: err } = await locals.sb.from("orders").insert({
    email: form.data.email,
    user_id: user?.id || null,
    first_name: form.data.first_name,
    last_name: form.data.last_name,
    address: form.data.address,
    city: form.data.city,
    country: form.data.country,
    postal_code: form.data.postal_code,
    products_id: productIds,
    total_sum: total,
    products_json: JSON.stringify(productsInCart),
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
