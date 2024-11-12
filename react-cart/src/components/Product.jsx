import React, { useContext, useState } from "react";
import peproni from "../assets/images/peproni.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";

const Product = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (e, product) => {
    e.preventDefault();
    let _cart = { ...cart }; //{}
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product.id]) {
      _cart.items[product.id] += 1;
    } else {
      _cart.items[product.id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
    // const cart = {
    //   items:{

    //   }
    // }
  };

  return (
    <Link to={`/products/${product.id}`}>
      <div>
        <img src={product.image} alt="pizza" />
        <div className="text-center">
          <h2 className="text-lg font-medium py-2">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.difficulty}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span>${product.caloriesPerServing}</span>
          <button
            disabled={isAdding}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500"
            } py-1 px-4 rounded-full`}
            onClick={(e) => addToCart(e, product)}
          >
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
