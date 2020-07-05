import React from "react";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center main-title">
        <h2 className="text-capitalize my-2">{title}</h2>
      </div>
    </div>
  );
};

export default Title;
