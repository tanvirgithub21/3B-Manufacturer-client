import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../fierbase.init";

const AddReview = () => {

  const { register, handleSubmit, reset } = useForm();
  const [liveUser ] = useAuthState(auth)


  const onSubmit = data =>{
    
    const userEmail = liveUser?.email
    const reviewData = {...data, userEmail}




    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((req) => req.json())
      .then((data) => {
        data && toast.success("Review Added")
        reset()
      })



















  }

  return (
    <div className="w-full h-full">
      <h2 className="text-xl text-center font-semibold my-5">Add Review</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[50%] bg-[#e6e6e6] p-8 rounded-lg shadow-lg mx-auto">
          <input
            type="text"
            placeholder="Type here Title"
            className="input w-full bg-[#333] mb-3 text-[#bccddb]"
            {...register("title")}
            required
          />
          <input
            type="number"
            placeholder="Type here Rating"
            className="input w-full bg-[#333] mb-3 text-[#bccddb]"
            {...register("rating")}
            required
          />

          <textarea
            name="Description"
            className="textarea w-full bg-[#333] mb-3 text-[#bccddb]"
            {...register("dric")}
            required
          />

          <button className="btn btn-accent w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
