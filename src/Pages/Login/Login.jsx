import React from "react";

const Login = () => {
  return (
    <section className="min-h-[91%] bg-accent">
      <h2 className="text-white text-3xl text-center mt-5 font-semibold">Login</h2>

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
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
