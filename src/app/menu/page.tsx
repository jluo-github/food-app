import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";

const MenuPage = () => {
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
            <div className='{`text-${category.color} flex flex-col justify-between items-center border border-b border-rose-500 shadow-lg`}'>
              <h1 className='uppercase  font-bold text-3xl py-2'>
                {category.title}
              </h1>
              <p className='text-sm my-8 px-4'>{category.desc}</p>

              <div>
                <button
                  className={`bg-rose-500 px-2 py-1 rounded-md text-white mb-12`}>
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
