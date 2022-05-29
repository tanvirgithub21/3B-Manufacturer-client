import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Rating from "../../Common/Rating";
import auth from "../../fierbase.init";
import useAdmin from "../../Hooks/useAdmin";

const ParchasePage = (pd) => {
  const { register, handleSubmit, reset } = useForm();

  const [liveUser] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
  };

  let newDric;
  //   if (pd?.pdDric?.length >= 250) {
  //     newDric = pd?.pdDric.slice(0, 245) + " " + "...";
  //   } else {
  //     newDric = pd?.pdDric;
  //   }
  const [, , rowData] = useAdmin(liveUser?.email);
  const { id } = useParams();
  console.log(id);

  const [min, setMin] = useState(50);
  const [abal, setAbal] = useState(100);
  const [qu, setQu] = useState(0);
  const [on, off] = useState(false);
  useEffect(() => {
    if (min <= qu && abal >= qu) {
      console.log("ok", qu);
      off(true);
    } else {
      console.log("not ok");
      off(false);
    }
  }, [qu]);

  return (
    <section>
      <div className="flex justify-center my-12">
        <div className="card max-w-md card-compact bg-base-100 shadow-xl px-4">
          <figure className="rounded-md overflow-hidden">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="product images"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{pd?.pdName}</h2>
            <p>{newDric}</p>
            <div className="flex justify-between items-center text-base font-semibold">
              {/* <h2>Minimum Odder {pd?.minOdder}</h2>
              <h2>Available Product {pd?.availablePd}</h2> */}
              <h2>Minimum Odder {min}</h2>
              <h2>Available Product {abal}</h2>
            </div>
            <div className="flex justify-between items-center text-base font-semibold mb-5">
              <h2>Price: $ {pd?.price}</h2>
              <Rating>{pd?.rating}</Rating>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center font-semibold text-xl sm:text-2xl mt-5">
          Purchase Form
        </h2>
        <div className="max-w-sm mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-10"
          >
            <input
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-slate-400 bg-slate-200"
              type="text"
              required
              defaultValue={rowData?.userName}
              {...register("userName")}
              readOnly
            />

            <input
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-slate-400 bg-slate-200"
              type="email"
              required
              defaultValue={rowData?.userEmail}
              {...register("email")}
              readOnly
            />

            <input
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Address"
              {...register("address")}
            />

            <input
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              required
              placeholder="Phone NO"
              {...register("phone")}
            />

            <input
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              required
              placeholder="Quantity"
              onChange={(e) => setQu(e.target.value)}
            />

            <div className="mb-4">
              {on ? (
                <button className="btn btn-accent w-full" type="submit">
                  PURCHASE NOW
                </button>
              ) : (
                <button
                  className="btn btn-accent w-full"
                  type="submit"
                  disabled
                >
                  PURCHASE NOW
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ParchasePage;
