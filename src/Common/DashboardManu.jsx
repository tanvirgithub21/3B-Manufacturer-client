import React from "react";
import { NavLink } from "react-router-dom";

const DashboardManu = ({ children }) => {

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-64 bg-slate-200 text-base-content">



          <li className="mb-2"><NavLink to="myProfile">My Profile</NavLink></li>
          <li className="mb-2"><NavLink to="myOdder">My Odder </NavLink></li>
          <li className="mb-2"><NavLink to="addReview">Add Review</NavLink></li>
          <li className="mb-2"><NavLink to="manageOdder">Manage Odder</NavLink></li>
          <li className="mb-2"><NavLink to="manageProduct">Manage Product</NavLink></li>
          <li className="mb-2"><NavLink to="addProduct">Add Product</NavLink></li>
          <li className="mb-2"><NavLink to="makeAdmin">Make Admin</NavLink></li>


        </ul>
      </div>
    </div>
  );
};

export default DashboardManu;
