import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import client from "$lib/sanityClient";
import type { IAvailableQauntity, IProduct } from "$lib/interfaces/interface";
import { AuthApiError } from "@supabase/supabase-js";

export const POST: RequestHandler = async ({ request, locals }) => {
  const { query } = await request.json();
  try {
    let availableQuantityFromDB: Array<IAvailableQauntity> = await client.fetch(
      query
    );
    return json({ availableQuantityFromDB });
  } catch (error) {
    return json({ error: true, message: error });
  }
};
