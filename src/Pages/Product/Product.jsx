import React, { useEffect, useState } from "react";
import SinglePd from "../../Common/SinglePd";

const Product = () => {
  
const [productData, setProductData] = useState([])

useEffect(() => {
  fetch("http://localhost:5000/product")
  .then(res => res.json())
  .then(data => setProductData(data))
},[])

  return (
    <div>
        <h1 className="text-2xl font-semibold text-center my-8">All Product</h1>
      <div className="grid grid-cols-3 gap-14 px-6">
        {productData.map((pd) => (
            <SinglePd pd={pd}/>
        ))}
      </div>
    </div>
  );
};

export default Product;
