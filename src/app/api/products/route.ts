import prisma from "@/utils/connect";
import { NextResponse, type NextRequest } from "next/server";

// fetch products
export const GET = async (req: NextRequest) => {
  //api/products?cat='salads'
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });

    // return products
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong!" }),
      { status: 500 }
    );
  }
};


// create single product

export const POST =async(req:NextRequest)=>{


   try {
    const body=await req.json();

     const product = await prisma.product.create({
     data:body,
     });

     return new NextResponse(JSON.stringify(product), {
       status: 201,
     });
   } catch (error) {
     return new NextResponse(
       JSON.stringify({ message: "something went wrong!" }),
       { status: 500 }
     );
   }
   
}