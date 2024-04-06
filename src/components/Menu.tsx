"use client";

import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

interface LinkType {
  id: number;
  title: string;
  url: string;
}

const links: LinkType[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Orders", url: "/orders" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // todo user:
  const user = true;

  return (
    <div>
      {!open ? (
        <Image
          src='/image/food1.png'
          width={20}
          height={20}
          alt='food'
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src='/image/food2.png'
          width={20}
          height={20}
          alt='food'
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className='bg-amber-700 items-center justify-center flex flex-col gap-8 w-full z-10  text-white absolute left-0 top-24 h-[calc(100vh-6rem)]'>
          {links.map((link) => (
            <Link key={link.id} href={link.url} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}

          {!user ? (
            <Link href='/login' onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href='/orders' onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <Link href='/orders' onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
