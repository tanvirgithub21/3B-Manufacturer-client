import React from "react";
import Rating from "../../Common/Rating";

const Product = () => {



    const cardDataFormet = {
        pdName: "Product name",
        pdImg: "https://api.lorem.space/image/shoes?w=400&h=225",
        pdDric: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, error. Facilis assumenda aperiam quaerat veritatis ducimus unde, deleniti laborum reiciendis? Pariatur, provident. Non, eos rem!",
        minOdder: 50,
        availablePd: 60,
        price: 520,
        rating: 2.5,
    }

const {pdName, pdDric, pdImg, availablePd, minOdder, price, rating} = cardDataFormet

  return (
    <div>


      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={pdImg}
            alt="product images"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{pdName}</h2>
          <p>{pdDric}</p>
          <div className="flex justify-between items-center text-base font-semibold">
              <h2>Minimum Odder {minOdder}</h2>
              <h2>Available Product {availablePd}</h2>
          </div>
          <div className="flex justify-between items-center text-base font-semibold mb-5">
              <h2>Price: $ {price}</h2>
              <Rating>{rating}</Rating>
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Product;
