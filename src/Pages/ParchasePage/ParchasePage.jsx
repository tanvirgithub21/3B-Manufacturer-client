import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Rating from "../../Common/Rating";
import auth from "../../fierbase.init";
import useAdmin from "../../Hooks/useAdmin";

const ParchasePage = () => {
  const { register, handleSubmit, reset } = useForm();

  const [singlePd, setSinglePd] = useState({});

  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [liveUser] = useAuthState(auth);

  const [, , rowData] = useAdmin(liveUser?.email);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct?pd=${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePd(data));
  }, [id]);
  const onSubmit = async (data) => {
    const odderData = {
      ...data,
      quantity,
      productId: singlePd?._id,
      odderUserEmail: liveUser?.email,
      userName: rowData?.userName,
      price: singlePd?.price,
      paymentStatus: "No-payment",
      pdImg: singlePd?.pdImg,
      pdName: singlePd?.pdName,
      transactionId: false,
      status: "Pending"  
    };
    await fetch("http://localhost:5000/sendOdderInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(odderData),
    })
      .then((req) => req.json())
      .then((data) => {
        
        data && toast.success("ADD YOUR ODDER");
        reset();
      });
  };

  let newDric;
  if (singlePd?.pdDric?.length >= 250) {
    newDric = singlePd?.pdDric.slice(0, 245) + " " + "...";
  } else {
    newDric = singlePd?.pdDric;
  }

  useEffect(() => {
    if (
      parseInt(singlePd?.minOdder) <= quantity &&
      parseInt(singlePd?.availablePd) >= quantity
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [quantity]);

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
            <h2 className="card-title">{singlePd?.pdName}</h2>
            <p>{newDric}</p>
            <div className="flex justify-between items-center text-base font-semibold">
              <h2>Minimum Odder {singlePd?.minOdder}</h2>
              <h2>Available Product {singlePd?.availablePd}</h2>
            </div>
            <div className="flex justify-between items-center text-base font-semibold mb-5">
              <h2>Price: $ {singlePd?.price}</h2>
              <Rating>{singlePd?.rating}</Rating>
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
              readOnly
            />

            <input
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-slate-400 bg-slate-200"
              type="email"
              required
              defaultValue={liveUser?.email}
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
              onChange={(e) => setQuantity(e.target.value)}
            />

            <div className="mb-4">
              {disabled ? (
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
