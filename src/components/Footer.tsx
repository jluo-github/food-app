import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='h-12 md:h24 p-4 lg:px-20 xl:px-40 text-rose-500 flex items-center justify-between'>
      <Link href='/' className='font-bold text-xl'>
        PurpleCat 
      </Link>
      <p>© {currentYear} PurpleCat. All rights reserved.</p>
    </div>
  );
};
export default Footer;
