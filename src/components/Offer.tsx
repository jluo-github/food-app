import Image from "next/image";
import CountDown from "./CountDown";
import image from "next/image";
import Link from "next/link";

const Offer = () => {
  return (
    <div className=' bg-slate-800 h-screen flex flex-col md:flex-row md:justify-between  '>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center item-center  text-center gap-8 p-6'>
        {/* title */}
        <h1 className='text-white text-5xl font-bold lg:text-6xl capitalize '>
          Crispy fish & fries{" "}
        </h1>
        <p className='text-white lg:text-xl'>
          Crispy battered fish served with golden fries, tartar sauce, and a
          side of coleslaw.
        </p>

        {/* counter */}
        <CountDown />

        {/* button */}
        <div>
          <Link
            href='/menu'
            className='bg-amber-700 rounded-md text-white py-2 px-4 '>
            Order Now
          </Link>
        </div>
      </div>

      {/*image  */}
      <div className='relative  flex-1 w-full'>
        <Image
          src='/image/food11.png '
          alt='food'
          fill
          className='object-contain '
        />
      </div>
    </div>
  );
};
export default Offer;
