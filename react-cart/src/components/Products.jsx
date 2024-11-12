import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const products = useLoaderData();
  // const { name } = useContext(CartContext);

  if (!products || products.length === 0) {
    return <p>No products available.</p>; // Handle the case where there's no data
  }

  // useEffect(() => {
  //   fetch("https://dummyjson.com/recipes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const datas = data.recipes;
  //       setProducts(datas);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <div className="container mx-auto pb-24 ">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-8 gap-24">
          {products.map((recipe) => (
            <Product key={recipe.id} product={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

export const recipeLoader = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  if (!response) {
    throw new Error("failed to Fetch recipes");
  }
  const data = await response.json();
  return data.recipes || [];
};
