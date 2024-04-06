import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";

// fetch orders
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  // check if user is authenticated
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }

      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });

      // return products
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: "something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    // return unauthorized user
    return new NextResponse(JSON.stringify({ message: "Unauthorized User" }), {
      status: 401,
    });
  }
};

// create order
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  // check if user is authenticated
  if (session) {
    try {
      const body = await req.json();

      if (session.user) {
        const order = await prisma.order.create({ data: body });
        return new NextResponse(JSON.stringify(order), { status: 200 });
      }

    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: "something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    // return unauthorized user
    return new NextResponse(JSON.stringify({ message: "Unauthorized User" }), {
      status: 401,
    });
  }
};
