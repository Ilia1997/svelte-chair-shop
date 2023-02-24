import { AuthApiError } from "@supabase/supabase-js";

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
