import prisma from "@/utils/connect";
import { NextResponse, type NextRequest } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const body = await req.json();
    await prisma.order.update({
      where: {
        id,
      },
      data: { status: body },
    });

    return new NextResponse(JSON.stringify({ message: "Order updated!" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong!" }),
      { status: 500 }
    );
  }
};
