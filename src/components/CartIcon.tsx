import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href='/cart' className="flex items-center gap-4">
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src='/image/food1.png' alt='cart' fill />
      </div>

      <span>Cart (2)</span>
    </Link>
  );
};
export default CartIcon; 
