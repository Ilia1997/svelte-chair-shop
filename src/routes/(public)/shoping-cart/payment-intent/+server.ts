import { json } from "@sveltejs/kit";
import Stripe from "stripe";
import { SECRET_STRIPE_KEY } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
// @ts-ignore
const stripe = new Stripe(SECRET_STRIPE_KEY);

export const POST: RequestHandler = async ({ request, locals }) => {
  //@ts-ignore
  const { total } = await request.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return json({
    clientSecret: paymentIntent.client_secret,
  });
};
