import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../services/context";
import { formatPrice } from "../utils/helpers";
import Button from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {({ isModalOpen, closeModal, modalProduct: { img, title, price } }) => {
          return !isModalOpen ? null : (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3"
                  >
                    <h5>Item added to cart</h5>
                    <img src={img} alt={title} className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">
                      price: &#x20A6;{formatPrice(price)}
                    </h5>
                    <Link to="/products">
                      <Button onClick={() => closeModal()}>Menu</Button>
                    </Link>
                    <Link to="/cart">
                      <Button inCart onClick={() => closeModal()}>
                        Add To Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--nearWhite);
  }
`;
