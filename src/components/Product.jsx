import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { truncate, formatCurrency } from "../utils/helpers";
import { ProductConsumer } from "../services/context";

export default class Product extends Component {
  render() {
    const {
      product: { id, title, img, price, inCart },
    } = this.props;
    return (
      <ProductContainer className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log(title)}>
            <Link to="/details">
              <img src={img} alt={title} className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart}
              onClick={() => console.log("added to cart")}
            >
              {inCart ? (
                <span className="text-capitalize mb-0">in cart</span>
              ) : (
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="d-flex justify-content-between mx-2 border-top py-2">
            <p className="text-title align-self-center mb-0">
              {truncate(title)}
            </p>
            <span className="text-price align-self-center mb-0">
              {formatCurrency(price, "NGN")}
            </span>
          </div>
        </div>
      </ProductContainer>
    );
  }
}

const ProductContainer = styled.div``;
