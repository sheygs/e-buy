import React, { Component } from "react";
import Product from "./Product";
import Title from "../common/Title";
import { ProductConsumer } from "../services/context";

export default class ProductList extends Component {
  render() {
    return (
      <div className="py-3">
        <div className="container">
          <Title title="All Products" />
          <div className="row">
            {
              <ProductConsumer>
                {({ products }) =>
                  products.map((product, i) => (
                    <Product key={i} product={product} />
                  ))
                }
              </ProductConsumer>
            }
          </div>
        </div>
      </div>
    );
  }
}
