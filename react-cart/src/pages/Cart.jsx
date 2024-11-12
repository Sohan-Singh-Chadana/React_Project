import React, { useContext, useEffect, useState } from "react";
import peproni from "../assets/images/peproni.png";
import { CartContext } from "../context/Cartcontext";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    console.log("cart", Object.keys(cart.items));
    console.log(cart.items);
    fetch(`https://dummyjson.com/recipes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((product) => {
        setProducts(product.recipes);
        console.log(product.recipes);
      })
      .catch((erorr) => console.log(erorr));
  }, [cart]);

  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-lg">Cart items</h1>
      <ul>
        {products.map((product) => {
          return (
            <li className="mb-12" key={product.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <img src={product.image} alt="" className="h-16" />
                  <span className="font-bold ml-4 w-48">{product.name}</span>
                </div>
                <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none font-bold">
                    -
                  </button>
                  <b className="px-4">2</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none font-bold">
                    +
                  </button>
                </div>
                <span className="font-bold">$500</span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white font-bold">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b>Grand Total:</b> $ 4999
      </div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
