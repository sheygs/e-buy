import React from "react";
import Title from "../common/Title";
import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../services/context";

const Cart = () => {
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
              <CartTotals value={value} />
            </>
          );
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
