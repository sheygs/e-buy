import React from "react";
import Title from "../common/Title";

const EmptyCart = () => {
  return (
    <div className="container mt-3">
      <Title title="There are no items in your cart." />;
    </div>
  );
};

export default EmptyCart;
