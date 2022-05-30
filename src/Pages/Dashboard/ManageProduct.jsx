import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const [allProductData, setAllProductData] = useState([]);
  const [reFetch, setReFatch] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setAllProductData(data));
  }, [reFetch]);

  const handelDelete = (id) => {
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
        fetch(`http://localhost:5000/product/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setReFatch(!reFetch);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire("Error!", "Your file has been not deleted.", "success");
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
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Owner</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProductData.map((pd, index) => (
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
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Owner</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
