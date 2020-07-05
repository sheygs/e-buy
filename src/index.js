import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import { ProductProvider } from "./services/context";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </StrictMode>,
  document.getElementById("root")
);
