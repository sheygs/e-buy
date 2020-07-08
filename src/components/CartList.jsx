import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div>
      {cart.map((item, i) => (
        <CartItem key={i} {...item} value={value} />
      ))}
    </div>
  );
}
