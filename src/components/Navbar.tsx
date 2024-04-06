import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const Navbar = () => {
  // todo user:
  const user = true;

  return (
    <div className='h-12 text-amber-700 p-4 flex md:h-24 items-center justify-between border-b-2 border-b-amber-700 uppercase lg:px-20 lx:px-40'>
      {/* left */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        {/* <Link href='/orders'>Orders</Link> */}
        <Link href='/contact'>Contact</Link>
      </div>
      {/* logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>PurpleCat</Link>
      </div>

      {/* mobile menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* right */}

      <div className='hidden md:flex gap-4  items-center flex-1 justify-end '>
        <div className='flex gap-2 items-center cursor-pointer md:absolute top-3 right-4  bg-amber-300 px-1 rounded-md text-sm'>
          <Image src='/image/logo1.png' alt='tel' width={20} height={20} />{" "}
          <span>123-555-5555</span>
        </div>

        {/* user Links */}
        <UserLinks />

        <CartIcon />
      </div>
    </div>
  );
};
export default Navbar;
