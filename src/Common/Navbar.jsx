import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../fierbase.init";
import useAdmin from "../Hooks/useAdmin";

const Navbar = ({ children }) => {
  const [liveUser] = useAuthState(auth);

  const [adminStatus, setAdminState] = useAdmin(liveUser?.email);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navRoute = (
    <>
      <li className="ml-3">
        <NavLink to="/" className="rounded-md">
          Home
        </NavLink>
      </li>
      <li className="ml-3">
        <NavLink to="/product" className="rounded-md">
          Product
        </NavLink>
      </li>

      {liveUser && (
        <li className="ml-3">
          <NavLink to="/dashboard/myOdder" className="rounded-md">
            Dashboard
          </NavLink>
        </li>
      )}

      <li className="ml-3">
        <NavLink to="/blog" className="rounded-md">
          Blog
        </NavLink>
      </li>
      <li className="ml-3">
        <NavLink to="/myPortfolio" className="rounded-md">
          My Portfolio
        </NavLink>
      </li>

      {liveUser ? (
        <li className="ml-3">
          <button
            className="bg-red-600 text-white rounded-xl"
            onClick={() => {
              signOut(auth);
              setAdminState(false);
              navigate("/");
            }}
          >
            SingOut
          </button>
        </li>
      ) : (
        <>
          <li className="ml-3">
            <NavLink to="/login" className="rounded-md">
              Login{" "}
            </NavLink>
          </li>
          <li className="ml-3">
            <NavLink to="/singIn" className="rounded-md">
              SingIn
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const includes = pathname.includes("dashboard");

  console.log(includes);
  return (
    <div className="drawer drawer-end max-w-[1280px] mx-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          {/* dashboard toggle btn  */}
          {includes && (
            <label
              htmlFor="my-drawer-2"
              tabIndex="0"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}

          <div className="flex-1 px-2 mx-2 font-semibold text-sky-700 items-end">
            <span className="text-orange-600 text-3xl mr-1 font-bold">3B </span>{" "}
            Manufacturer
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">{navRoute}</ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {navRoute}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
