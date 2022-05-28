import React from "react";

const ManageProduct = () => {


  return (
    <div className="p-5">

    <h1 className="text-2xl text-center font-semibold mt-5 my-8">Manage Product</h1>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            
            <tr>
              <th>1</th>
              <td>Aland Wilber</td>
              <td>Paid</td>
              <td>#345534141</td>
              <td>Pansing</td>
              <td>
                  <button className="text-sky-600 hover:underline font">Delete</button>
              </td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
