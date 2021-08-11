import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import NewProduct from "./components/NewProduct";
import Form from "./components/Form";

const App = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = "/api/products";

  useEffect(() => {
    axios.get(`${baseUrl}`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="app">
      <h2 >Product List</h2>
      <Form products={products} />
      <h2 >Products</h2>
      <NewProduct products={products} />
    </div>
  );
};


export default App;
