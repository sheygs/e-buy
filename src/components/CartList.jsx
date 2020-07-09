import React from "react";
import CartItem from "./CartItem";

const CartList = ({ value }) => {
  const { cart } = value;
  return (
    <div>
      {cart.map((item, i) => (
        <CartItem key={i} item={item} value={value} />
      ))}
    </div>
  );
};

export default CartList;
