import React, { Component, createContext } from "react";
import { store, detailProduct } from "./fakeServices";
const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
  };

  componentDidMount() {
    let products = [];
    store.forEach((item) => {
      products = [...products, { ...item }];
    });
    this.setState({ products });
  }

  getItem = (id) => {
    const { products } = this.state;
    return products.find((product) => product.id === id);
  };

  handleProductDetail = (id) => {
    const detailProduct = this.getItem(id);
    this.setState({ detailProduct });
  };

  addToCart = (id) => {
    const products = [...this.state.products];
    const index = products.findIndex((product) => product.id === id);
    const product = products[index];
    product.inCart = !product.inCart;
    product.count = product.count + 1;
    product.total = product.total + product.price;
    this.setState(
      {
        products,
        cart: [...this.state.cart, product],
      },
      () => console.log(this.state)
    );
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
