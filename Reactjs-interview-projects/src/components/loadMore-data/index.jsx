import React, { useState, useEffect } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [totaldata, setTotaldata] = useState(180);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
        // setTotaldata(result.total);
      }
      console.log(result);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [count]);

  console.log(totaldata);

  useEffect(() => {
    if (products && products.length === totaldata) setDisableButton(true);
  }, [products]);

  if (loading) {
    return (
      <div className="container mx-auto text-center flex items-center justify-center mt-60 text-lg font-medium">
        Loading data ! Please Wait &nbsp; 🙋‍♂️ <BsMinecartLoaded />
      </div>
    );
  }

  if (errorMsg !== null) {
    return (
      <div className="container mx-auto text-center flex items-center justify-center mt-60 text-lg font-medium ">
        {" "}
        Error occured ! {errorMsg}{" "}
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="product-container grid-cols-2 lg:grid-cols-4 md:grid-cols-3  ">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container text-center">
        <button
          className="py-2 px-3 bg-gray-500 text-white text-lg font-medium rounded-md my-20  hover:bg-gray-700"
          onClick={() => setCount(count + 1)}
          disabled={disableButton}
        >
          Load More Products
        </button>
        {disableButton ? <p>You have reached to {totaldata} products</p> : null}
      </div>
    </div>
  );
};

export default React.memo(LoadMoreData);
