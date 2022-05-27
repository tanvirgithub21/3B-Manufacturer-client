import React from 'react';
import Rating from '../../Common/Rating';

const SinglePd = ({pd}) => {
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={pd?.pdImg} alt="product images" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{pd?.pdName}</h2>
          <p>{pd?.pdDric}</p>
          <div className="flex justify-between items-center text-base font-semibold">
            <h2>Minimum Odder {pd?.minOdder}</h2>
            <h2>Available Product {pd?.availablePd}</h2>
          </div>
          <div className="flex justify-between items-center text-base font-semibold mb-5">
            <h2>Price: $ {pd?.price}</h2>
            <Rating>{pd?.rating}</Rating>
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SinglePd;