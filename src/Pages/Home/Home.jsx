import React from "react";
import { BsTools } from "react-icons/bs";
import Footer from "../../Common/Footer";

const Home = () => {
  const url =
    "https://www.planettogether.com/hs-fs/hubfs/lean_manu_tools.jpg?width=1250&name=lean_manu_tools.jpg";
  return (
    <div>
      <section
        class="hero min-h-[calc(100vh-4rem)]"
        style={{
          backgroundImage: `url(${url})`
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      <section className="px-5 my-[5rem]">
          <h2 className="text-center font-semibold text-xl sm:text-3xl my-5">Business Summary</h2>
        <div className="grid grid-cols-3 justify-center gap-12 mt-5">

          <div class="rounded bg-primary text-primary-content place-content-center flex flex-col items-center p-[2rem]">
            <BsTools className="text-7xl"/>
            <p className="text-2xl font-[500] mt-3">Tootle Tootles</p>
            <p className="text-3xl font-semibold">1200+</p>
          </div>
          <div class="rounded bg-accent text-accent-content place-content-center flex flex-col items-center p-[2rem]">
            <BsTools className="text-7xl"/>
            <p className="text-2xl font-[500] mt-3">Tootle Tootles</p>
            <p className="text-3xl font-semibold">1200+</p>
          </div>
          <div class="rounded bg-secondary text-secondary-content place-content-center flex flex-col items-center p-[2rem]">
          <BsTools className="text-7xl"/>
            <p className="text-2xl font-[500] mt-3">Tootle Tootles</p>
            <p className="text-3xl font-semibold">1200+</p>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
};

export default Home;
