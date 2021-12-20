import React from 'react';
import PropTypes from 'prop-types';

function CustomDropdown({ options, handleChange, name, labelName, testID, value }) {
  return (
    <label htmlFor={ `${name}-input` } className="d-flex align-items-center">
      {labelName}
      <select
        id={ `${name}-input` }
        className="form-select align-items-center"
        name={ name }
        onChange={ handleChange }
        data-testid={ testID }
        value={ value }
      >
        {options.map((option) => (
          <option
            key={ option }
            value={ option }
            data-testid={ testID === 'currency-input' ? option : '' }
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomDropdown;
