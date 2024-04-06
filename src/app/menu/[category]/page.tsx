import type { ProductType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { category: string };
};

// fetch  category  from the server
const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const data = await res.json();
  return data;
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);

  return (
    <div className=' flex text-rose-500  flex-wrap'>
      {products.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className='w-full h-[60vh] flex flex-col justify-between border-r-2 border-b-2 sm:w-1/2 lg:w-1/3 p-4 border-rose-500 group hover:bg-rose-50'>
          {/* image */}
          {item.img && (
            <div className='relative h-[80%] '>
              <Image
                fill
                src={item.img}
                alt='food'
                className='object-contain'
              />
            </div>
          )}
          {/* text */}

          <div className='flex items-center justify-between font-bold  '>
            <div>
              <h1 className='text-lg p-2'>{item.title}</h1>
            </div>
            <div>
              <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
              <button className='bg-rose-500 text-white px-2 py-1 rounded-md hidden group-hover:block '>
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CategoryPage;
