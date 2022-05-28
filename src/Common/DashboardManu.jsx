import React from "react";
import { NavLink } from "react-router-dom";

const DashboardManu = ({ children }) => {

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-slate-200 text-base-content">


          {/* dashboard sideber Link  */}
          <li className="mb-2"><NavLink to="myOdder">My Odder </NavLink></li>
          <li className="mb-2"><NavLink to="myProfile">My Profile</NavLink></li>
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
