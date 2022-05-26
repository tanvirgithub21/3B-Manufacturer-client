import React from "react";

const Home = () => {
    const url = "https://www.planettogether.com/hs-fs/hubfs/lean_manu_tools.jpg?width=1250&name=lean_manu_tools.jpg"
  return (
    <section
      class="hero min-h-[calc(100vh-4rem)]"
      style={{
        backgroundImage: `url(${url})`}}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
