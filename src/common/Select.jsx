import React from "react";

const Select = ({ size }) => {
  return (
    <h4 className="text-blue my-3">
      <strong>
        sizes:{" "}
        {typeof size === "string" ? (
          <select
            style={{ maxWidth: "50%" }}
            class="custom-select custom-select-sm mb-3"
          >
            <option selected>Select Size</option>
            {size.split(",").map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        ) : (
          <span>{size}</span>
        )}
      </strong>
    </h4>
  );
};

export default Select;
