import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-rose-500 md:flex-row md:gap-6 md:items-center '>
      {/* img */}
      {singleProduct.img && (
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
        <h1 className=' text-3xl font-bold lg:text-4xl '>{singleProduct.title}</h1>
        <p className=''>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};
export default SingleProductPage;
