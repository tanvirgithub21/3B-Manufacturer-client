import React, { useEffect, useState } from "react";
import { BsTools } from "react-icons/bs";
import Footer from "../../Common/Footer";
import Review from "../../Common/Review";
import SinglePd from "../../Common/SinglePd";

const Home = () => {
  const url =
    "https://www.planettogether.com/hs-fs/hubfs/lean_manu_tools.jpg?width=1250&name=lean_manu_tools.jpg";

  const [latestPd, setLatestPd] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/homeProduct")
      .then((res) => res.json())
      .then((data) => setLatestPd(data));

    fetch("http://localhost:5000/review")
    .then(res => res.json())
    .then(data => setReview(data))
  }, []);


  return (
    <div>
      <section
        className="hero min-h-[calc(100vh-4rem)]"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center font-semibold text-xl sm:text-3xl mt-5 mb-12">
          Latest Product
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 md:gap-10 px-6">
            {latestPd.map((pd) => (
              <SinglePd key={pd?._id} pd={pd} />
            ))}
          </div>
        </div>
      </section>


      <section>
        <h2 className="text-center font-semibold text-xl sm:text-3xl mt-10 mb-14">
          Latest Review
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 md:gap-10 px-6">
            {review.map((review) => (
              <Review key={review?._id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 my-[5rem]">
        <h2 className="text-center font-semibold text-xl sm:text-3xl mt-5 mb-10">
          Business Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 md:gap-10 px-6">
          <div className="rounded bg-primary text-primary-content place-content-center flex flex-col items-center p-[2rem]">
            <BsTools className="text-7xl" />
            <p className="text-2xl font-[500] mt-3">Tootle Tootles</p>
            <p className="text-3xl font-semibold">1200+</p>
          </div>
          <div className="rounded bg-accent text-accent-content place-content-center flex flex-col items-center p-[2rem]">
            <BsTools className="text-7xl" />
            <p className="text-2xl font-[500] mt-3">Tootle Tootles</p>
            <p className="text-3xl font-semibold">1200+</p>
          </div>
          <div className="rounded bg-secondary text-secondary-content place-content-center flex flex-col items-center p-[2rem]">
            <BsTools className="text-7xl" />
            <p className="text-2xl font-[500] mt-3">Tootle Tootles</p>
            <p className="text-3xl font-semibold">1200+</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
