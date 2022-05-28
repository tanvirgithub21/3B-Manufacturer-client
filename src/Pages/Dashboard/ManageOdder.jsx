import React from "react";

const ManageOdder = () => {
  const pay = (
    <td className="px-6 py-4 ">
      <button className="px-5 py-2 bg-[#1093eb] hover:bg-[#3493d3] text-black font-semibold rounded-lg">
        Pay
      </button>
    </td>
  );

  return (
    <div className="p-5">
      <h1 className="text-xl text-center font-semibold my-7">Manage Odder</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th className="text-center pr-5" scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-3 py-1">
                <div className="avatar">
                  <div className="w-12 rounded-sm">
                    <img src="https://api.lorem.space/image/face?hash=64318" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">Lorem ipsum dolor sit</td>
              <td className="px-6 py-4">#535652264411</td>
              <td className="px-6 py-4 ">Paid</td>
              <td className="px-6 py-4">Panding</td>
              <td className="px-6 py-4 text-center">
                <button className="btn btn-primary">Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOdder;
