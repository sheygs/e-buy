import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const CartTotals = ({ value: { subTotal, tax, total, clearCart } }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subTotal: </span>
              <strong>&#x20A6; {formatPrice(subTotal)}</strong>
            </h5>
            <h5>
              <span className="text-title">tax: </span>
              <strong>&#x20A6; {formatPrice(tax)}</strong>
            </h5>
            <h5>
              <span className="text-title">total: </span>
              <strong>&#x20A6; {formatPrice(total)}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
