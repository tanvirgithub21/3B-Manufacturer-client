import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data)
    }

  return (
    <div>
      <div class="flex justify-center">
        <div class="w-full lg:max-w-lg ">

          <form onSubmit={handleSubmit(onSubmit)} class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 my-10">
            <h2 className="text-xl font-semibold text-center mb-5">
              Add Product
            </h2>

              <input
                class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Product Name"
                required
                {...register("pdName")}
              />

              <input
                class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Minimum Odder"
                required
                {...register("minOdder")}
              />

              <input
                class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Product Quantity"
                required
                {...register("availablePd")}
              />

              <input
                class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Product Price"
                required
                {...register("price")}
              />

              <input
                class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="url"
                placeholder="Product Img url"
                required
                {...register("pdImg")}
              />

              <input
                class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Product Rating"
                required
                {...register("rating")}
              />

              <textarea className="mb-4 shadow appearance-none border rounded w-full h-28 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                required
                {...register("pdDric")} />

            <div class="mb-4">
              <button className="btn btn-accent w-full" type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
