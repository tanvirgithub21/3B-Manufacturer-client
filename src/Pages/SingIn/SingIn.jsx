import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";

const SingIn = () => {
  return (
    <section className="min-h-[91%] bg-accent">
      <h2 className="text-white text-3xl text-center mt-5 font-semibold">
        SingIn
      </h2>

      <div className="pb-[1rem] min-h-[92%]">
        <form action="flex justify-center items-center">
          <div className="flex flex-col items-center gap-5 pt-[3rem]">
            <input
              type="text"
              placeholder="Name"
              class="input w-full max-w-xs"
              required
            />
            <input
              required
              type="email"
              placeholder="Email"
              class="input w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              class="input w-full max-w-xs"
              required
            />
            <input
              type="password"
              placeholder="Conform Password"
              class="input w-full max-w-xs"
              required
            />
            <input
              type="submit"
              class="input w-full max-w-xs text-white btn btn-primary"
              value="Sing In"
            />
          </div>
          <div className="w-full max-w-xs text-white mx-auto">

              <p className="text-center mt-5">Have a already account? <span className="text-black font-semibold cursor-pointer">Login</span></p>
        
          </div>
         
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default SingIn;
