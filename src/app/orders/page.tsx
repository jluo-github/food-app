"use client";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { OrderType } from "@/type/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { table } from "console";

const OrdersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetch(" /api/orders").then((res) => res.json()),
  });

  const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(` /api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success("Order updated successfully!");
  };

  if (isPending || status === "loading") return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='p-4 lg:px-20 xl:px-40 '>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item: OrderType) => {
            return (
              <tr
                key={item.id}
                className={`${
                  item.status === "delivered" ? "bg-slate-50" : "bg-amber-50"
                }`}>
                <td className=' hidden md:block  py-6 px-1 '>{item.id}</td>{" "}
                <td className=' py-6 px-1 '>
                  {item.createdAt.toString().slice(0, 10)}
                </td>{" "}
                <td className='py-6 px-1 '>${Number(item.price).toFixed(2)}</td>{" "}
                <td className='hidden md:block  py-6 px-1'>
                  {item.products[0].title}
                </td>{" "}
                {session?.user.isAdmin ? (
                  <td>
                    <form
                      onSubmit={(e) => handleUpdate(e, item.id)}
                      className='flex items-center justify-center gap-4 '>
                      <input
                        placeholder={item.status}
                        className='p-2 ring-1 ring-slate-200 rounded-md '
                      />
                      <button className='bg-slate-500 p-2 rounded-full '>
                        <Image
                          alt='edit'
                          src='/edit.png'
                          width={20}
                          height={20}
                        />
                      </button>
                    </form>
                  </td>
                ) : (
                  <td className=' py-6 px-1 '>{item.status} </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default OrdersPage;
