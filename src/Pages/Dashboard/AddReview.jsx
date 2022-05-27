import React from "react";

const AddReview = () => {
  return (
    <div className="w-full h-full">
      <h2 className="text-xl text-center font-semibold my-5">Add Review</h2>
      <div>
        <form className="max-w-[50%] bg-[#e6e6e6] p-8 rounded-lg shadow-lg mx-auto">
          <input
            type="text"
            placeholder="Type here Title"
            class="input w-full bg-[#333] mb-3 text-[#bccddb]"
          />
          <input
            type="number"
            placeholder="Type here Rating"
            class="input w-full bg-[#333] mb-3 text-[#bccddb]"
          />

          <textarea name="Description" className="textarea w-full bg-[#333] mb-3 text-[#bccddb]" />

          <button className="btn btn-accent w-full" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
