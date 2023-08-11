/* eslint-disable react/prop-types */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Navbar from "./Navbar";

function ProductInfo({ params }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  }, [params.id, setProduct]);

  console.log(product);

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center bg-dark">
        <div className=" mt-5 pt-5 p-5">
          <Product product={product} isProductInfo="true" />
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
