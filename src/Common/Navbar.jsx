import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../fierbase.init";

const Navbar = ({ children }) => {
  const [liveUser] = useAuthState(auth);

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
      <li className="ml-3">
        <NavLink to="/dashboard/myOdder" className="rounded-md">
          Dashboard
        </NavLink>
      </li>
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
            onClick={() => signOut(auth)}
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

  return (
    <div class="drawer drawer-end max-w-[1280px] mx-auto">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-base-300">
          {/* dashboard toggle btn  */}
          <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <div class="flex-1 px-2 mx-2 font-semibold text-sky-700 items-end">
            <span className="text-orange-600 text-3xl mr-1 font-bold">3B </span>{" "}
            Manufacturer
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">{navRoute}</ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">{navRoute}</ul>
      </div>
    </div>
  );
};

export default Navbar;
