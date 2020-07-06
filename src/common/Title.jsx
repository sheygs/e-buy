import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center main-title">
        <h2 className="text-capitalize my-5">{title}</h2>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
