import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


// fetch categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    // return categories
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = () => {
  return new NextResponse("hello", { status: 200 });
};
