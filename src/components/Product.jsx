import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { truncate, formatPrice } from "../utils/helpers";
import PropTypes from "prop-types";
import { ProductConsumer } from "../services/context";

const Product = ({ product: { id, title, img, price, inCart } }) => {
  return (
    <ProductContainer className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {({ handleProductDetail, addToCart }) => {
            return (
              <div
                className="image-container p-5"
                onClick={() => handleProductDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt={title} className="card-image-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart}
                  onClick={() => addToCart(id)}
                >
                  {inCart ? (
                    <span className="text-capitalize mb-0">in cart</span>
                  ) : (
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                  )}
                </button>
              </div>
            );
          }}
        </ProductConsumer>
        <div className="card-info d-flex justify-content-between mx-2 border-top py-2">
          <p className="text-title align-self-center mb-0">{truncate(title)}</p>
          <span className="text-price align-self-center mb-0">
            &#x20A6;
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  .card {
    border-color: transparent;
    transition: all 1.5s linear;
  }

  .card-info {
    border-top: transparent;
    background: transparent;
    transition: all 1.5s linear;
  }

  &:hover {
    .card {
      border: 0.75px solid rgba(0, 0, 0, 0.25);
      box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);
    }

    .card-info {
      background: rgba(246, 245, 247);
    }
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }

  .card-image-top {
    display: block;
    max-width: 100%;
    transition: all 1s linear;
  }

  .image-container:hover .card-image-top {
    transform: scale(1.15);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2em 0.5em;
    border: none;
    background: var(--secondaryBlue);
    cursor: pointer;
    color: var(--nearWhite);
    border-radius: 5px 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .cart-btn:hover {
    color: var(--bgDark);
  }

  .image-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Product;
