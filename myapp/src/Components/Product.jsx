/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "@mongez/react-router";

function Product({ product, isProductInfo }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card p-2 h-100">
        <img
          src={product.image}
          className="card-img-top h-100"
          alt="card img"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h6>price: ${product.price}</h6>
          {isProductInfo ? null : (
            <Link
              href="#"
              className="btn btn-primary"
              to={`/product/${product.id}`}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
