import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import CardTotal from "../components/CardTotal";


const ProductList = () => {
const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

const [produkte,setProdukte] = useState([])
const  [error, setError] = useState(false)
const  [loading, setLoading] = useState(true)

const getData = async () => {

  try {
    const { data } = await axios.get(BASE_URL)
    setProdukte(data)

  } catch (err) {
    setError(true)
    console.log(err);

  }finally{
    setLoading(false)
  }
}
useEffect(()=>{
  getData()
},[])

if(error){
  return <p>Something went wrong...</p>
}


  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
      {loading ? <p>Loading...</p> :   (
        <>
          <article id="product-panel" className="col-md-6">
            {produkte.map((product) => (
              <ProductCard key={product.id} product={product} getData={getData}/>
            ))}
          </article>
          <article>
            <CardTotal products={produkte}/>
          </article>
        </>
        )}
      
      </div>
    </div>
  );
};

export default ProductList;
