import React, { useEffect, useState } from "react";
import peproni from "../assets/images/peproni.png";
import { useParams, useNavigate } from "react-router-dom";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params.id]);

  return (
    <div className="container mx-auto ">
      <button
        className="mb-12 font-bold bg-yellow-500 py-2 px-8 hover:bg-yellow-400 rounded-full duration-200"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Back
      </button>
      <div className="flex ">
        <img src={product.image} alt="" className="w-[300px]" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.difficulty}</div>
          <div className="font-bold mt-2">${product.caloriesPerServing}</div>
          <button className="bg-yellow-500 py-2 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
