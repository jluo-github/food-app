import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const intentId = searchParams.get("intentId");

  if (!intentId) {
    return new NextResponse("intentId is required", { status: 400 });
  }

  try {
    await prisma.order.update({
      where: { intent_id: intentId },
      data: { status: "In Progress" },
    });
    return new NextResponse("Order has been updated", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Something went wrong!", { status: 500 });
  }
};
