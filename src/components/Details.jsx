import React, { Component } from "react";
import Select from "../common/Select";
import { ProductConsumer } from "../services/context";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { formatPrice } from "../utils/helpers";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {({ detailProduct, addToCart, openModal }) => {
          const {
            id,
            title,
            img,
            price,
            size,
            seller,
            info,
            inCart,
          } = detailProduct;
          return (
            <div className="container py-3">
              <div className="row">
                <div className="col-10 mx-auto my-3">
                  <h2 className="text-center main-title text-capitalize">
                    Product Detail
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-8 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt={title} />
                </div>
                <div className="col-8 mx-auto col-md-6 my-2">
                  <h2>{title}</h2>
                  <h4 className="main-title text-uppercase text-muted my-2">
                    seller: <span className="text-uppercase">{seller}</span>
                  </h4>
                  <h4 className="text-blue my-2">
                    <strong>
                      price: &#x20A6;<span>{formatPrice(price)}</span>
                    </strong>
                  </h4>
                  <Select size={size} />
                  <p className="text-title text-capitalize font-weight-bold mt-3 mb-0">
                    product description:
                  </p>
                  <p
                    style={{ overflow: "scroll", height: "200px" }}
                    className="text-muted lead"
                  >
                    {info}
                  </p>
                  <div className="action-btns">
                    <Link to="/">
                      <Button>Menu</Button>
                    </Link>
                    <Link to="#">
                      <Button
                        inCart
                        disabled={inCart}
                        onClick={() => {
                          addToCart(id);
                          openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "Add To Cart"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
