import React from "react";

const NotFound = ({ location }) => {
  console.log(location);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center main-title pt-5">
          <h1>404</h1>
          <h2>page not found</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
