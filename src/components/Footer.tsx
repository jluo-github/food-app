import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='h-12 md:h24 p-4 lg:px-20 xl:px-40 text-amber-700 flex items-center justify-between'>
      <p>
        © {currentYear}{" "}
        <Link href='/' className='font-bold text-xl'>
          PurpleCat
        </Link>{" "}
        All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
