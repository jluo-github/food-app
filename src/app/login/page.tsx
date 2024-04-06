"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>;
  if (status === "authenticated") router.push("/");

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex p-4  items-center justify-center '>
      {/* container */}
      <div className='h-full shadow-2xl rounded--md flex flex-col md:flex-row items-center  md:w-full '>
        {/* image */}
        <div className='relative h-1/3 w-full flex justify-center items-center md:h-full  md:w-1/2 '>
          <Image src='/image/food1.png' alt='login' width={150} height={150} />
        </div>
        {/* form */}

        <div className=' p-10 lg:p-2 flex flex-col gap-8'>
          <h1 className='font-bold text-xl  text-rose-500 lg:text-2xl '>
            PurpleCat Food
          </h1>
          <p>Login or register</p>

          {/* google signin */}
          <button
            className='flex gap-4 p-4 ring-1 ring-rose-100 rounded-md '
            onClick={() => signIn("google")}>
            <Image
              src='/google.png'
              width={30}
              height={30}
              alt='google'
              className='object-contain'
            />
            <span className=''>Sign in with Google</span>
          </button>

          {/* facebook signin */}
          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
            <Image
              src='/facebook.png'
              width={30}
              height={30}
              alt='facebook'
              className='object-contain'
            />
            <span className=''>Sign in with Facebook</span>
          </button>

          <p className='text-sm'>
            Hava a problem?{" "}
            <Link href='/' className='underline'>
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
