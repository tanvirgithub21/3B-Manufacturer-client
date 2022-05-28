import React from "react";
import Rating from "./Rating";

const Review = ({review}) => {


    let newDric;
    if((review?.dric?.length) >= 150){
        newDric = review?.dric.slice(0, 145) + " ..."
    }else{
        newDric = review?.dric
    }




  return (
    <div>
      <div class="card bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="text-center text-xl font-semibold text-white">{review?.title}</h2>
          <p className="text-justify">{newDric}</p>
          <div class="card-actions justify-center mt-6">
            <Rating>{review?.rating}</Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
