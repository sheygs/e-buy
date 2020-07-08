import React, { Component } from "react";

export default class CartColumns extends Component {
  columns = [
    { id: 1, title: "products" },
    { id: 2, title: "name" },
    { id: 3, title: "price" },
    { id: 4, title: "quantity" },
    { id: 5, title: "remove" },
    { id: 6, title: "total" },
  ];
  render() {
    const { columns } = this;
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          {columns.map((column) => (
            <div key={column.id} className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase text-title">{column.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
