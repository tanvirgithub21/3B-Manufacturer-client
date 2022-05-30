import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../fierbase.init";

const MyOdder = () => {
  const [odderData, setOdderData] = useState([]);
  const [rerender, setRerender] = useState(true);
  const [action, setAction] = useState(false);

  const confirmAlert = () => {};
  confirmAlert();

  const [liveUser] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/odderData?odderUserEmail=${liveUser?.email}`)
      .then((req) => req.json())
      .then((data) => {
        setOdderData(data);
      });
  }, [liveUser, rerender]);

  console.log(odderData);

  const handelOderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/odderDelete", {
          method: "DELETE",
          headers: { id: `${id}` },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setRerender(!rerender);
          });
      }
    });
  };

  const handelPay = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Pay for ${name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("true");

        fetch(`http://localhost:5000/odderPay/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire("Successful!", "payment successful.", "success");
              setRerender(!rerender);
            } else {
              Swal.fire("Error!", "Payment Not send.", "Error");
            }
          });
      }
    });
  };

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
              <th scope="col" className="pr-6 py-3">
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
                    <button
                      onClick={() => handelPay(odder?._id, odder?.pdName)}
                      className="btn btn-sm btn-success"
                    >
                      Pay
                    </button>
                  </td>
                )}

                <td className="px-6 py-4">{odder?.status}</td>
                <td className="px-6 py-4 text-right">
                  {odder?.paymentStatus == "pay" ? (
                    <button
                      disabled
                      className="font-medium text-gray-500 dark:text-gray-500"
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => handelOderDelete(odder?._id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
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
