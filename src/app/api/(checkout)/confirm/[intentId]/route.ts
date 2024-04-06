import prisma from "@/utils/connect";
import error from "next/error";
import { NextResponse } from "next/server";

export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;
  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: {
        status: "In Progress",
      },
    });
    return {
      status: 200,
      body: JSON.stringify({ message: "Order has been updated" }),
    };
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
