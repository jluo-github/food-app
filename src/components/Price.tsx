"use client";

import { useEffect, useState } from "react";

type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: PriceProps) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [price, selected, quantity, options]);

  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
      {/* options */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
          <button
            onClick={() => setSelected(index)}
            key={option.title}
            className='min-w-[6rem] py-1 px-2 ring-1 ring-rose-400 rounded-md '
            style={{
              background: selected === index ? "#f43f5e" : "white",
              color: selected === index ? "white" : "#f43f5e",
            }}>
            {option.title}
          </button>
        ))}
      </div>

      {/* quantity button */}

      <div className='flex justify-between items-center '>
        {/* <h3>Quantity</h3> */}
        <div className='flex justify-between w-full p-2  border border-rose-500'>
          <span className=''>{quantity}</span>
          <div className=' gap-4 flex items-center '>
            <button
              className=''
              onClick={() =>
                setQuantity((pre) => (quantity === 1 ? 1 : pre - 1))
              }>
              {" "}
              {"-"}{" "}
            </button>
            <span className=''> {quantity} </span>
            <button
              className=''
              onClick={() =>
                setQuantity((pre) => (quantity === 9 ? 9 : pre + 1))
              }>
              {"+"}
            </button>
          </div>
        </div>

        {/*   button */}

        <button className='w-52   text-bold bg-rose-500 text-white p-2 border border-rose-500 rounded-r-md hover:bg-rose-600'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Price;
