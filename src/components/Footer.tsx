import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='h-12 md:h24 p-4 lg:p-20 xl:p-40 text-rose-500 flex items-center justify-between'>
      <Link href='/' className='font-bold text-xl'>
        PurpleCat 
      </Link>
      <p>© {currentYear} PurpleCat. All rights reserved.</p>
    </div>
  );
};
export default Footer;
