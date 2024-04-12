import type { ProductType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";

// fetch featurned products from the server
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  const data = await res.json();
  return data;
};

const Featured = async () => {
  const featuredProducts: ProductType[] = await getData();

  return (
    <div className='w-screen overflow-x-scroll text-amber-700 '>
      {/* container */}
      <div className='w-max flex '>
        {/* single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-amber-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[70vh] '>
            {/* image */}
            {item.img && (
              <div className='relative flex-1 w-full hover:scale-x-105 hover:scale-y-105 transition-all duration-700 my-8 '>
                <Image
                  src={item.img}
                  alt='food'
                  fill
                  className='object-contain rounded-full'
                  // width={300}
                  // height={300}
                />
              </div>
            )}

            {/* text */}
            <div className='flex-1 flex flex-col gap-4  items-center justify-center   shadow-lg hover:shadow-none '>
              <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl '>
                {item.title}
              </h1>
              <p className='p-4 2xl:p-8'>{item.desc}</p>
              <span className='text-xl font-bold'>$ {item.price}</span>
              <Link
                href={`/product/${item.id}`}
                className='bg-amber-700 text-white rounded-md px-3 py-1 mb-4'>
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Featured;
