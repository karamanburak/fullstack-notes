import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";


const ProductList = () => {
const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

const getData = async () => {

 const {data} = await axios.get(BASE_URL)
 console.log(data);

}
useEffect(()=>{
  getData()
},[])

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        (
        <>
          <article id="product-panel" className="col-md-6">
            {[].map((product) => (
              <ProductCard key={product.id} />
            ))}
          </article>

        </>
        )
      </div>
    </div>
  );
};

export default ProductList;
