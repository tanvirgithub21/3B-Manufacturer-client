import React from 'react';
import Rating from './Rating'

const SinglePd = ({pd}) => {


  console.log(pd);
  let newDric;
  if((pd?.pdDric.length) >= 250){
    newDric = pd?.pdDric.slice(0, 245) + " " + "...";
  }else{
    newDric = pd?.pdDric;
  }


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={pd?.pdImg} alt="product images" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{pd?.pdName}</h2>
          <p>{newDric}</p>
          <div className="flex justify-between items-center text-base font-semibold">
            <h2>Minimum Odder {pd?.minOdder}</h2>
            <h2>Available Product {pd?.availablePd}</h2>
          </div>
          <div className="flex justify-between items-center text-base font-semibold mb-5">
            <h2>Price: $ {pd?.price}</h2>
            <Rating>{pd?.rating}</Rating>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SinglePd;