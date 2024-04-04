"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Great taste",
    desc: "Our food is made with the best ingredients and cooked to perfection. It's crispy, tasty and delicious. You'll love it!",
    image: "/image/food4.png",
  },
  {
    id: 2,
    title: "Always fresh",
    desc: "Our food is made with the freshest ingredients and cooked with love. It's crispy and tasty. We guarantee you'll love it!",
    image: "/image/food1.png",
  },
  {
    id: 3,
    title: "Made with love",
    desc: "Our food is made with love and care. We use only the best ingredients to make sure you get the best food possible.",
    image: "/image/food2.png",
  },
  {
    id: 4,
    title: "Fast delivery",
    desc: "We deliver your food fast and fresh. You can order online and we'll deliver it to your door in no time.",
    image: "/image/food3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // todo: fix the slider
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] lg:flex-row bg-rose-50  '>
      {/* text */}
      <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-rose-500 font-bold flex-1'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-rose-500 text-white py-4 px-8 text-2xl rounded-md '>
          Order Now
        </button>
      </div>

      {/* image */}
      <div className='w-full flex-1 relative '>
        <Image
          src={data[currentSlide].image}
          fill
          alt='food'
          className='object-cover'
        />
      </div>
    </div>
  );
};
export default Slider;
