import { AuthApiError } from "@supabase/supabase-js";
import { fail, type Actions } from "@sveltejs/kit";
import client from "$lib/sanityClient";

export const load = async ({
   params,
   locals,
}: {
   params: RouteParamsForUsers;
   locals: App.Locals;
}) => {
   let orderId = params.id;

   const order = await locals.sb.from("orders").select().eq("id", orderId);
   if (order.error) {
      if (order.error instanceof AuthApiError && order.error.status == 500) {
         return { error: true, message: "Api error" };
      } else {
         return { error: true, message: order.error.message };
      }
   }

   return { order: order.data };
};

const increaseAmountOfProductsWhenOrderCompleted: boolean | any = async (
   quantityToBuy: number,
   itemId: string
) => {
   let result;
   let availableQuantity;
   const queryToGetAvailableQuantityFromDB = `*[ _type == "products" && _id =="${itemId}"]{available_quantity, code}`;
   try {
      const res = await client.fetch(queryToGetAvailableQuantityFromDB);
      availableQuantity = res[0].available_quantity;
      const productCode = res[0].code;

      if (availableQuantity >= quantityToBuy) {
         result = await client.patch(itemId).dec({ available_quantity: quantityToBuy }).commit();
      } else {
         return {
            error: `Available amount of ${productCode} is ${availableQuantity}`,
         };
      }
   } catch (error: any) {
      return { error: "Server error" };
   }

   return true;
};

//confirmOrder
export const actions: Actions = {
   confirmOrder: async ({ request, locals }) => {
      const body = Object.fromEntries(await request.formData());
      const productsJson = body;
      console.log("🚀 ~ file: +page.server.ts:48 ~ confirmOrder: ~ products_json:", productsJson);
      // const parsedProducts = JSON.parse(products_json as string);
      // console.log(
      //    "🚀 ~ file: +page.server.ts:49 ~ confirmOrder: ~ parsedProducts:",
      //    parsedProducts
      // );
      const res = await increaseAmountOfProductsWhenOrderCompleted(
         3,
         "898725ed-e1f9-4d41-a15f-288806ad65ab"
      );
      if (res.error) {
         return fail(500, { error: res.error });
      }
      // const orderId = parseInt(body.order_id as string);

      // const { data, error: err } = await locals.sb

      //    .from("orders")
      //    .update({ is_confirmed: true })
      //    .eq("id", orderId);

      // if (err) {
      //    console.log(err);
      //    if (err instanceof AuthApiError && err.status == 500) {
      //       return fail(500, {
      //          error: "Server error. Please try again later.",
      //       });
      //    }
      //    return fail(500, {
      //       error: err.message,
      //    });
      // }

      // return { success: true };
   },
};
