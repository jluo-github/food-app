import type { MenuType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();

  return (
    <div className='p-4 lg:px-20  xl:px-40  flex flex-col md:flex-row  justify-between '>
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className='m-auto justify-between items-center w-full md:w-1/3 md:m-2'
          // style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className='  '>
            {/* image */}
            <div className='mb-4 relative h-64 w-full '>
              {category.img && (
                <Image
                  src={category.img}
                  alt={category.title}
                  fill
                  className=' object-cover '
                />
              )}
            </div>

            {/* text */}
            <div className='{`text-${category.color} flex flex-col justify-between items-center border border-b border-amber-700 shadow-lg`}'>
              <h1 className='uppercase  font-bold text-3xl py-2'>
                {category.title}
              </h1>
              <p className='text-sm my-8 px-4'>{category.desc}</p>

              <div>
                <button
                  className={`bg-amber-700 px-2 py-1 rounded-md text-white mb-12`}>
                  Explore
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default MenuPage;
