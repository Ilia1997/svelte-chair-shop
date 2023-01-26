import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
  addAddresAndShopingDetail: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    locals.shopingDetails = body;
    return { success: true, data: body };
  },
};
