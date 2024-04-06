"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex flex-col text-rose-500 lg:flex-row '>
      {/* products */}
      <div className='h-2/3 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 xl:w-1/2 lg:p-20 xl:p-40'>
        {/* single item */}
        {products.map((product) => (
          // image:
          <div
            key={product.id}
            className='flex items-center justify-between mb-4 '>
            {product.img && (
              <Image src={product.img} alt='food' width={100} height={100} />
            )}

            {/* title,quantity */}
            <div className=''>
              <h1 className='text-xl font-bold capitalize'> {product.title}</h1>
              <span>
                {product.optionTitle} ({product.quantity})
              </span>
            </div>

            {/* price, remove button */}
            <h2 className=' font-bold '>${product.price}</h2>
            <span
              className='cursor-pointer'
              onClick={() => removeFromCart(product)}>
              X
            </span>
          </div>
        ))}
      </div>

      {/* payment */}

      <div className='h-1/3 p-4 bg-rose-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:p-10 xl:p-40 xl:text-xl xl:gap-6 '>
        <div className='flex justify-between '>
          <span className=''>Subtotal ({totalItems} items)</span>
          <span className=''>${totalPrice}</span>
        </div>
        <div className='flex justify-between '>
          <span className=''>Delivery Fee</span>
          <span className=''> Free </span>
        </div>

        <hr className='my-2' />
        <div className='flex justify-between '>
          <span className='font-bold'>Total Price</span>
          <span className='font-bold'>${totalPrice}</span>
        </div>

        <button className='w-1/2 self-end bg-rose-500 text-white rounded-md p-2 hover:bg-rose-600'>
          Check Out
        </button>
      </div>
    </div>
  );
};
export default CartPage;
