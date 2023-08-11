import { useEffect, useState } from "react";
import Axios from "axios";
import Product from "./Product";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios("https://fakestoreapi.com/products/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  // eslint-disable-next-line react/jsx-key
  const products = data.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return (
    <section className="ms-5 me-5 overflow-hidden" id="products">
      <h2 className="text-center text-Secondary mb-5">Our Products</h2>

      <div>
        <div className="row gy-4">{products}</div>
      </div>
    </section>
  );
}

export default ProductList;
