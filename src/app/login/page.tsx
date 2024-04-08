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
    <div className=' flex items-center justify-center min-h-screen bg-amber-50'>
      {/* container */}
      <div className='relative flex flex-col md:h-[400px] items-center gap-2 bg-white shadow-2xl md:flex-row  '>
        {/* image */}
        <div className=' w-1/2 hidden md:block '>
          <Image
            src='/image/food1.png'
            alt='login'
            width={400}
            height={400}
            rounded-xl
          />
        </div>

        {/* right side */}

        <div className=' p-6 md:p-20 '>
          <h1 className='font-bold text-xl  text-amber-700 lg:text-2xl mb-5'>
            PurpleCat Food
          </h1>

          <div className='flex flex-col justify-between items-center '>
            {/* google signin */}
            <button
              className='flex gap-4 p-4 ring-1 ring-amber-100 rounded-md my-2'
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
            {/* <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md my-2'>
            <Image
              src='/facebook.png'
              width={30}
              height={30}
              alt='facebook'
              className='object-contain'
            />
            <span className=''>Sign in with Facebook</span>
          </button> */}

            <div className='flex flex-col '>
              <p className='my-4 text-sm   text-slate-500'>
                Login or register.
              </p>
              <p className='text-sm my-2  text-slate-500'>
                Have a problem?{" "}
                <Link href='/' className='underline'>
                  {" "}
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
