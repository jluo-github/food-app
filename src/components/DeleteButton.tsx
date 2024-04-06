"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  // console.log("data", session);

  const router = useRouter();

  if (status === "loading") {
    return <div>loading...</div>;
  }
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/menu");
        toast.success("Product has been deleted.");
      }else{
        const data = await response.json();
        toast.error(data.message);
      }

    } catch (error) {
      toast.error("something went wrong!");
    }
  };

  return (
    <button className='bg-rose-500 rounded-full p-2 absolute top-4 right-4 text-white '>
      <Image
        src='/delete.png'
        alt='delete'
        height={20}
        width={20}
        onClick={handleDelete}
      />
    </button>
  );
};
export default DeleteButton;
