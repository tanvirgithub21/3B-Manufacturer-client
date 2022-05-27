import React from "react";

const MyOdder = () => {
  const status = "pay";

  const paid = <td class="px-6 py-4 ">Paid</td>;
  const pay = (
    <td class="px-6 py-4 ">
      <button className="px-5 py-2 bg-[#1093eb] hover:bg-[#3493d3] text-black font-semibold rounded-lg">
        Pay
      </button>
    </td>
  );

  return (
    <div className="p-5">
      <h1 className="text-xl text-center font-semibold mb-5">My Odder</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" class="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th className="text-right pr-5" scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-3 py-1">
                <div class="avatar">
                  <div class="w-12 rounded-sm">
                    <img src="https://api.lorem.space/image/face?hash=64318" />
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">Lorem ipsum dolor sit</td>
              <td class="px-6 py-4">#535652264411</td>
              {pay}
              <td class="px-6 py-4">Panding</td>
              <td class="px-6 py-4 text-right">
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOdder;
