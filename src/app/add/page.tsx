"use client";

import { authOptions } from "@/utils/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, type ChangeEventHandler } from "react";

type Option = {
  title: string;
  additionalPrice: number;
};

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

const AddPage = () => {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);

  const [file, setFile] = useState<File>();

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOptions = () => {
    setOptions(options.filter((opt) => opt.title !== option.title));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    setFile(file);
  };

  // upload image to cloudinary
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", file!);
    data.append("upload_preset", "food-app");

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const res = await fetch(url, {
      method: "POST",

      body: data,
    });
    const resData = await res.json();
    return resData.url;
  };

  // submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = await uploadImage();

      const res = await fetch(" /api/products", {
        method: "POST",

        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();
      router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className='shadow-xl flex flex-wrap gap-4 p-8 '
        onSubmit={handleSubmit}>
        <h1>Add New Product</h1>

        {/* upload img */}
        <div className='flex flex-col gap-2 w-full '>
          <label htmlFor='title'>Image</label>
          <input
            onChange={handleImageChange}
            type='file'
            className='ring-1 ring-slate-300 p-2 '
          />
        </div>

        {/* title */}
        <div className='flex flex-col gap-2 w-full '>
          <label htmlFor='title'>Title</label>
          <input
            onChange={handleChange}
            type='text'
            name='title'
            id='title'
            className='ring-1 ring-slate-300 p-2 '
          />
        </div>
        <div className='flex flex-col gap-2 w-full '>
          <label htmlFor='desc'>Desc</label>
          <textarea
            onChange={handleChange}
            name='desc'
            id='desc'
            className='ring-1 ring-slate-300 p-2 '
          />
        </div>
        <div className='flex flex-col gap-2 w-full '>
          <label htmlFor='price'>Price</label>
          <input
            onChange={handleChange}
            type='number'
            name='price'
            id='price'
            className='ring-1 ring-slate-300 p-2 '
          />
        </div>
        <div className='flex flex-col gap-2 w-full '>
          <label htmlFor='cat'>Category</label>
          <input
            onChange={handleChange}
            type='text'
            name='catSlug'
            id='cat'
            className='ring-1 ring-slate-300 p-2 '
          />
        </div>
        {/* options */}
        <div className='flex flex-col gap-2 w-full  '>
          <label htmlFor='options'>Options</label>
          <div className='flex flex-col gap-2  md:flex-row  '>
            <input
              onChange={handleOptionChange}
              type='text'
              name='title'
              id='title'
              placeholder='title'
              className='ring-1 ring-slate-300 p-2 '
            />
            <input
              onChange={handleOptionChange}
              className='ring-1 ring-slate-300 p-2 '
              type='number'
              name='additionalPrice'
              id='price'
              placeholder='Additional Price'
            />
            <div
              onClick={() => setOptions((prev) => [...prev, option])}
              className='flex self-start mx-auto border border-blue-600  p-2 rounded-md  cursor-pointer'>
              Add Option
            </div>
          </div>

          {/* added options tags*/}
          <div className='flex flex-col gap-2 md:flex-row'>
            {options.map((option) => (
              <div
                onClick={handleOptions}
                key={option.title}
                className='ring-1 p-2 ring-amber-700 rounded-md cursor-pointer m-2 '>
                <span> {option.title} </span>
                <span> ${option.additionalPrice}</span>
              </div>
            ))}
          </div>
        </div>
        {/* submit button */}
        <div>
          <button className='bg-amber-700 text-white py-2 px-8 rounded-md  m-auto'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPage;
