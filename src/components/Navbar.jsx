import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link style={{ textDecoration: "none" }} to="/">
        <span className="navbar-brand mb-0 h1">e-buy</span>
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
          <span className="mr-2">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </span>
          Cart
        </Button>
      </Link>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: var(--primaryBlue);
  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
  .nav-link {
    color: var(--nearWhite) !important;
    text-transform: capitalize;
    font-size: 1.3rem;
  }
`;

export default Navbar;
