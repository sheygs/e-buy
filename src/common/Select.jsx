import React from 'react';

const Select = ({ size }) => {
  return (
    <h4 className="text-blue my-3">
      <strong>
        <span>sizes: </span>
        {typeof size === 'string' ? (
          <select
            style={{
              maxWidth: '50%',
              fontSize: '1rem',
            }}
            className="custom-select custom-select-sm mb-2"
          >
            <option value="">--select--</option>
            {size.split(',').map((el, i) => (
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
