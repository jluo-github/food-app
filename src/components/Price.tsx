"use client";

import type { ProductType } from "@/type/types";
import { useCartStore } from "@/utils/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const { id, title, img, price, options } = product;
  const { addToCart } = useCartStore();

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const newPrice = options?.length
      ? Number(options[selected].additionalPrice) + Number(price)
      : price;

    setTotal(quantity * newPrice);
  }, [price, selected, quantity, options]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      optionTitle: product.options?.[selected].title,
      quantity: quantity,
    });

    toast.success("Added to Cart");
  };

  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='text-2xl font-bold'>${total}</h2>
      {/* options */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
          <button
            onClick={() => setSelected(index)}
            key={option.title}
            className='min-w-[6rem] py-1 px-2 ring-1 ring-amber-400 rounded-md '
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
        <div className='flex justify-between w-full p-2  border border-amber-700'>
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

        <button
          className='w-52   text-bold bg-amber-700 text-white p-2 border border-amber-700 rounded-r-md hover:bg-amber-600'
          onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Price;
