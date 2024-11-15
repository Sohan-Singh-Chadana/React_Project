import React from "react";
import pizzaImage from "../assets/images/pizza.png";
import { Products } from "../components/index";

function Home() {
  return (
    <>
      <div className="hero py-16 font-medium">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <img src={pizzaImage} alt="" className="w-4/5" />
          </div>
        </div>
      </div>
      {/* //* product list section */}
      <div className="pb-24">
        <Products />
      </div>
    </>
  );
}

export default Home;
