import React from "react";
import SinglePd from "./SinglePd";

const Product = () => {
  const cardDataFormet = [
    {
      pdName: "Product name",
      pdImg: "https://api.lorem.space/image/shoes?w=400&h=225",
      pdDric:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, error. Facilis assumenda aperiam quaerat veritatis ducimus unde, deleniti laborum reiciendis? Pariatur, provident. Non, eos rem!",
      minOdder: 50,
      availablePd: 60,
      price: 520,
      rating: 2.5,
    },
    {
      pdName: "Product name",
      pdImg: "https://api.lorem.space/image/shoes?w=400&h=225",
      pdDric:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, error. Facilis assumenda aperiam quaerat veritatis ducimus unde, deleniti laborum reiciendis? Pariatur, provident. Non, eos rem!",
      minOdder: 50,
      availablePd: 60,
      price: 520,
      rating: 2.5,
    },
    {
      pdName: "Product name",
      pdImg: "https://api.lorem.space/image/shoes?w=400&h=225",
      pdDric: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, error. Facilis assumenda aperiam quaerat veritatis ducimus unde, deleniti laborum reiciendis? Pariatur, provident. Non, eos rem!",
      minOdder: 50,
      availablePd: 60,
      price: 520,
      rating: 2.5,
    },
  ];


  return (
    <div>
        <h1 className="text-2xl font-semibold text-center my-8">All Product</h1>
      <div className="grid grid-cols-3 gap-14 px-6">
        {cardDataFormet.map((pd) => (
            <SinglePd pd={pd}/>
        ))}
      </div>
    </div>
  );
};

export default Product;
