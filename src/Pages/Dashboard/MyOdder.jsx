import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../fierbase.init";

const MyOdder = () => {
  const [odderData, setOdderData] = useState([]);

  const status = "pay";

  const paid = <td className="px-6 py-4 ">Paid</td>;
  const pay = (
    <td className="px-6 py-4 ">
      <button className="px-5 py-2 bg-[#1093eb] hover:bg-[#3493d3] text-black font-semibold rounded-lg">
        Pay
      </button>
    </td>
  );

  const [liveUser] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/odderData?odderUserEmail=${liveUser?.email}`)
      .then((req) => req.json())
      .then((data) => {
        setOdderData(data);
        data && toast.success("ADD YOUR ODDER");
      });
  }, [liveUser]);

  console.log(odderData);

  return (
    <div className="p-5">
      <h1 className="text-xl text-center font-semibold mb-5">My Odder</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-[1rem]">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Transaction ID
              </th> */}
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th className="text-right pr-5" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {odderData.map((odder) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-3 py-1">
                  <div className="avatar">
                    <div className="w-12 rounded-sm">
                      <img src={odder?.pdImg} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{odder?.pdName}</td>
                {odder?.paymentStatus == "pay" ? (
                  <td className="px-6 py-4">Paid</td>
                ) : (
                  <td>
                    <button className="btn btn-success">Pay</button>
                  </td>
                )}

                <td className="px-6 py-4">{odder?.status}</td>
                <td className="px-6 py-4 text-right">
                  {odder?.paymentStatus == "pay" ? (
                    <button
                      disabled
                      className="font-medium text-gray-500 dark:text-gray-500 "
                    >
                      Delete
                    </button>
                  ) : (
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOdder;
