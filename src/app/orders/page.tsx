const OrdersPage = () => {
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
          <tr className='text-sm md:text-base py-6 px-1 first:bg-rose-50'>
            <td className=' hidden md:block  py-6 px-1 '>
              2222222
            </td>{" "}
            <td className=' py-6 px-1 '>02.01.2024</td>{" "}
            <td className='py-6 px-1 '>$11.11</td>{" "}
            <td className='hidden md:block  py-6 px-1'>
              something
            </td>{" "}
            <td className=' py-6 px-1 '>delivered </td>{" "}
          </tr>
          <tr className='text-sm md:text-base py-6 px-1 odd:bg-gray-50'>
            <td className=' hidden md:block  py-6 px-1 '>
              2222222
            </td>{" "}
            <td className=' py-6 px-1 '>02.01.2024</td>{" "}
            <td className='py-6 px-1 '>$11.11</td>{" "}
            <td className='hidden md:block  py-6 px-1'>
              something
            </td>{" "}
            <td className=' py-6 px-1 '>delivered </td>{" "}
          </tr>
          <tr className='text-sm md:text-base py-6 px-1 odd:bg-gray-50'>
            <td className=' hidden md:block  py-6 px-1 '>
              2222222
            </td>{" "}
            <td className=' py-6 px-1 '>02.01.2024</td>{" "}
            <td className='py-6 px-1 '>$11.11</td>{" "}
            <td className='hidden md:block  py-6 px-1'>
              something
            </td>{" "}
            <td className=' py-6 px-1 '>delivered </td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrdersPage;
