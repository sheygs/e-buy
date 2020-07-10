import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import styled from "styled-components";
import { ProductConsumer } from "../services/context";

const Navbar = () => {
  return (
    <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link style={{ textDecoration: "none" }} to="/">
        <span className="navbar-brand mb-0 h1">eBuy</span>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/products" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <Button>
          <span className="">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            <ProductConsumer>
              {({ cart }) => <span className="cart-count">{cart.length}</span>}
            </ProductConsumer>
            <sub>Cart</sub>
          </span>
        </Button>
      </Link>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: var(--primaryBlue);
  span {
    font-weight: 700;
    font-size: 1.7rem;
  }

  .nav-link {
    color: var(--nearWhite) !important;
    text-transform: capitalize;
    font-size: 1.3rem;
  }

  .cart-count {
    font-size: 1rem;
    padding: 4px 8px;
    border-radius: 50%;
    color: white;
    background: red;
    vertical-align: top;
    margin-left: -5px;
  }
`;

export default Navbar;
