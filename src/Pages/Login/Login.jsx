import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-[91%] bg-accent">
      <h2 className="text-white text-3xl text-center mt-5 font-semibold">
        Login
      </h2>

      <div className="">
        <form action="flex justify-center items-center">
          <div className="flex flex-col items-center gap-5 pt-[3rem]">
            <input
              type="text"
              placeholder="Type here"
              class="input w-full max-w-xs"
              required
            />
            <input
              required
              type="email"
              placeholder="Type here"
              class="input w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Type here"
              class="input w-full max-w-xs"
              required
            />
            <input
              type="submit"
              class="input w-full max-w-xs text-white btn btn-primary"
              value="Loin"
            />
              <div className="text-white font-semibold text-sm">
                <Link to="">Forgotten password?</Link>
              </div>
              <div className="text-white font-semibold text-sm">
                <Link to="">Create new account?</Link>
              </div>

            <div class="w-full max-w-xs text-white divider mx-auto">OR</div>
          </div>
        </form>
        <div className="w-full">
          <button className="flex justify-center items-center  px-5 py-3 bg-blue-100 text-xl text-black font-semibold rounded-lg mx-auto max-w-xs w-full">
            <FcGoogle className="text-3xl mr-3" />
            <span>Sing IN with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
