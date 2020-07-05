import React, { Component, createContext } from "react";
import { products, detailProduct } from "./products";
const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products,
    detailProduct,
  };

  handleProductDetail = () => {
    console.log("handle detail");
  };

  addToCart = () => {
    console.log("add to cart");
  };

  render() {
    const { products, detailProduct } = this.state;
    return (
      <ProductContext.Provider
        value={{
          products,
          detailProduct,
          handleProductDetail: this.handleProductDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
