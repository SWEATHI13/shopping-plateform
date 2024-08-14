import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "./Carousel";
import GetAllCategories from "../productComponent/GetAllCategories";
import ProductCard from "../productComponent/ProductCard";
import Footer from "./Footer";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveAllProducts();
      if (allProducts) {
        setProducts(allProducts.products);
      }
    };

    const getProductsByCategory = async () => {
      const allProducts = await retrieveProductsByCategory();
      if (allProducts) {
        setProducts(allProducts.products);
      }
    };

    if (categoryId == null) {
      console.log("Category Id is null");
      getAllProducts();
    } else {
      console.log("Category Id is NOT null");
      getProductsByCategory();
    }
  }, [categoryId]);

  const retrieveAllProducts = async () => {
    const response = await axios.get("http://localhost:8080/api/product/all");
    return response.data;
  };

  const retrieveProductsByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/category?categoryId=" + categoryId
    );
    return response.data;
  };

  return (
    <div style={styles.containerFluid}>
      <Carousel />
      <div style={styles.contentWrapper}>
        <div style={styles.row}>
          <div className="col-md-2">
            <GetAllCategories />
          </div>
          <div className="col-md-10">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {products.map((product) => (
                <ProductCard key={product.id} item={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

const styles = {
  containerFluid: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0",
    padding: "0",
    fontFamily: "Arial, sans-serif",
  },
  contentWrapper: {
    flex: 1,
    marginTop: "20px",
    marginBottom: "40px",
  },
  row: {
    marginLeft: "0",
    marginRight: "0",
  },
  carousel: {
    marginBottom: "20px",
  },
};

export default HomePage;
