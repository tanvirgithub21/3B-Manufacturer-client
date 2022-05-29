import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageOdder = () => {
  const [allOdder, setAllOdder] = useState([]);
  const [reFatch, setRatch] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allOdderData")
      .then((res) => res.json())
      .then((data) => setAllOdder(data));
  }, [reFatch]);

  const pay = (
    <td className="px-6 py-4 ">
      <button className="px-5 py-2 bg-[#1093eb] hover:bg-[#3493d3] text-black font-semibold rounded-lg">
        Pay
      </button>
    </td>
  );

  const handleDelete = (id) => {
    fetch("http://localhost:5000/odderDelete", {
      method: "DELETE",
      headers: {
        id: `${id}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Delete");
        setRatch(!reFatch);
      });
  };
  const handleConform = async (id) => {
    fetch(`http://localhost:5000/odderUpdate/${id}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

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
              <th className="text-center pr-5" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allOdder.map((odder) => (
              <tr
                key={odder._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-3 py-1">
                  <div className="avatar">
                    <div className="w-12 rounded-sm">
                      <img src={odder?.pdImg} alt="img" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{odder?.pdName}</td>
                <td className="px-6 py-4">
                  {odder?.transactionId ? "Not Show" : "Not Show"}
                </td>
                <td className="px-6 py-4 ">{odder?.paymentStatus}</td>
                <td className="px-6 py-4">{odder?.status}</td>
                <td className="px-6 py-4 text-center">
                  <div class="btn-group">
                    <button
                      onClick={() => handleDelete(odder?._id)}
                      class="btn bg-red-600"
                    >
                      Delete
                    </button>
                    {odder?.paymentStatus == "pay" ? (
                      <button
                        onClick={() => handleConform(odder?._id)}
                        class="btn bg-success text-black hover:text-white"
                      >
                        Conform
                      </button>
                    ) : (
                      <button disabled class="btn bg-success text-black hover:text-white">
                        Conform
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOdder;
