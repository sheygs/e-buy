import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/products" />
          <Route exact path="/" component={ProductList} />
          <Redirect to="/not-found" />
        </Switch>
      </>
    );
  }
}
