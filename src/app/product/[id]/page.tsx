import Image from "next/image";
import Price from "@/components/Price";
import type { ProductType } from "@/type/types";
import DeleteButton from "@/components/DeleteButton";

const getData = async (id: string) => {
  const res = await fetch(` /api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const singleProduct: ProductType = await getData(id);
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-amber-700 md:flex-row md:gap-6 md:items-center relative'>
      {/* img */}
      {singleProduct?.img && (
        <div className='relative h-1/2 w-full md:h-[70%]'>
          <Image
            fill
            alt='food'
            src={singleProduct.img}
            className='object-contain'
          />
        </div>
      )}

      {/* text */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-8 lg:gap-10 '>
        <h1 className=' text-3xl font-bold lg:text-4xl '>
          {singleProduct.title}
        </h1>
        <p className=''>{singleProduct.desc}</p>
        <Price product={singleProduct} />
        <DeleteButton id={singleProduct.id} />
      </div>
    </div>
  );
};
export default SingleProductPage;
