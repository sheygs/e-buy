import React, { Component } from "react";
import Title from "../common/Title";
import CartList from "./CartList";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../services/context";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            return !cart.length ? (
              <EmptyCart />
            ) : (
              <>
                <Title title="Your Cart" />
                <CartColumns />
                <CartList value={value} />
              </>
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}
