import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../fierbase.init";

const AddProduct = () => {

  const [liveUser ] = useAuthState(auth)

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data =>{
      const userEmail = liveUser?.email
      const productData = {...data, addProductEmail: userEmail}
        await fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          })
            .then((req) => req.json())
            .then((data) => {
              
              data && toast.success("Product Added")
              reset()
            })
    }

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full lg:max-w-lg ">

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 my-10">
            <h2 className="text-xl font-semibold text-center mb-5">
              Add Product
            </h2>

              <input
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Product Name"
                required
                {...register("pdName")}
              />

              <input
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Minimum Odder"
                required
                {...register("minOdder")}
              />

              <input
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Product Quantity"
                required
                {...register("availablePd")}
              />

              <input
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Product Price"
                required
                {...register("price")}
              />

              <input
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="url"
                placeholder="Product Img url"
                required
                {...register("pdImg")}
              />

              <input
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Product Rating"
                required
                {...register("rating")}
              />

              <textarea className="mb-4 shadow appearance-none border rounded w-full h-28 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                required
                {...register("pdDric")} />

            <div className="mb-4">
              <button className="btn btn-accent w-full" type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
