import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse, type NextRequest } from "next/server";

// get single product
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong!" }),
      { status: 500 }
    );
  }
};

// delete single product
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      const product = await prisma.product.delete({
        where: {
          id,
        },
      });

      return new NextResponse(
        JSON.stringify({ message: "Product has been deleted." }),
        {
          status: 200,
        }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: "something went wrong!" }),
        { status: 500 }
      );
    }
  }

  return new NextResponse(
    JSON.stringify({ message: "you are not authorized!" }),
    { status: 401 }
  );
};

