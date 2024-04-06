import prisma from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// export default async function handler(req, res) {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "eur",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// }

export const POST = async (
  request: NextRequest,
  { params }: { params: { orderId: string } }
) => {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (order) {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Update the order with the PaymentIntent ID
    await prisma.order.update({
      where: { id: orderId },
      data: { intent_id: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  }
  return new NextResponse(JSON.stringify({ message: "Order not found" }), {
    status: 404,
  });
};
