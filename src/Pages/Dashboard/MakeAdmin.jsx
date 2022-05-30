import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [userData, setUserData] = useState([]);
    const [refacth, setReFacth] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/allUser")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [refacth]);

  console.log(userData);

  const handelMakeAdmin = (email) => {
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
        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((req) => req.json())
          .then((data) => {
            setReFacth(!refacth)
            if (data) {
                
              Swal.fire("Make Admin!", "Your user Make Admin.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-semibold mt-5 my-8">
        Manage Product
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th className="text-right pr-6">User Status</th>
              <th className="text-right pr-4">Remove User</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user?.userEmail}</td>
                <td className="text-right">
                  {user?.userRoll ? (
                    <button
                      disabled
                      className=" btn btn-sm text-black hover:bg-[#636161]"
                    >
                      Already Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user?.userEmail)}
                      className="btn btn-sm hover:bg-[#636161]"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="text-right">
                  {user?.userRoll ? (
                    <button
                      disabled
                      className="btn btn-sm bg-[#fc2323] hover:bg-[#636161]"
                    >
                      Remove User
                    </button>
                  ) : (
                    <button className="btn btn-sm bg-[#fc2323] hover:bg-[#636161]">
                      Remove User
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {/* {allProductData.map((pd, index) => (
              <tr>
                {console.log(pd)}
                <th>{index + 1}</th>
                <th className="w-11 w-11 overflow-hidden">
                  {" "}
                  <img src={pd?.pdImg} alt="img" />
                </th>
                <td>{pd?.pdName}</td>
                <td>{pd?.addProductEmail}</td>
                <td>{pd?.availablePd}</td>
                <td>
                  <button
                    onClick={() => handelDelete(pd?._id)}
                    className="btn bg-[#bd0000] hover:bg-[#ff0202] btn-sm "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
