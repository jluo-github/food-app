import Image from "next/image";

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex flex-col text-rose-500 lg:flex-row '>
      {/* products */}
      <div className='h-2/3 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 xl:w-1/2 lg:p-20 xl:p-40'>
        {/* single item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/image/food11.png' alt='food' width={100} height={100} />

          <div className=''>
            <h1 className='text-xl font-bold capitalize'> food 1</h1>
            <span>large</span>
          </div>

          <h2 className=' font-bold '>$9999</h2>
          <span className='cursor-pointer'> X </span>
        </div>
        {/* single item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/image/food11.png' alt='food' width={100} height={100} />

          <div className=''>
            <h1 className='text-xl font-bold capitalize'> food 1</h1>
            <span>large</span>
          </div>

          <h2 className=' font-bold '>$9999</h2>
          <span className='cursor-pointer'> X </span>
        </div>
        {/* single item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/image/food11.png' alt='food' width={100} height={100} />

          <div className=''>
            <h1 className='text-xl font-bold capitalize'> food 1</h1>
            <span>large</span>
          </div>

          <h2 className=' font-bold '>$9999</h2>
          <span className='cursor-pointer'> X </span>
        </div>
      </div>

      {/* payment */}

      <div className='h-1/3 p-4 bg-rose-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:p-10 xl:p-40 xl:text-xl xl:gap-6 '>
        <div className='flex justify-between '>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$9999</span>
        </div>
        <div className='flex justify-between '>
          <span className=''>Delivery Fee</span>
          <span className=''> Free </span>
        </div>

        <hr className='my-2' />
        <div className='flex justify-between '>
          <span className='font-bold'>Total Price</span>
          <span className='font-bold'>$9999</span>
        </div>

        <button className='w-1/2 self-end bg-rose-500 text-white rounded-md p-2 hover:bg-rose-600'>
          Check Out
        </button>
      </div>
    </div>
  );
};
export default CartPage;
