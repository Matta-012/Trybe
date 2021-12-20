import React from 'react';
import PropTypes from 'prop-types';

function CustomTextInput({
  id,
  name,
  value,
  type,
  aria,
  labelName,
  testID,
  placeholder,
  handleChange,
  classes,
}) {
  const ariaDescribed = aria || '';
  const placeHolderText = placeholder || '';
  const classList = classes || 'form-label';
  return (
    <div className="mt-3">
      <label htmlFor={ id } className={ classList }>
        {labelName}
        <input
          data-testid={ testID }
          placeholder={ placeHolderText }
          type={ type }
          className="form-control"
          id={ id }
          name={ name }
          value={ value }
          required
          onChange={ handleChange }
          aria-describedby={ ariaDescribed }
        />
      </label>
    </div>
  );
}

CustomTextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  aria: PropTypes.string,
  labelName: PropTypes.string.isRequired,
  testID: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

CustomTextInput.defaultProps = {
  aria: '',
  testID: '',
  placeholder: '',
  classes: 'form-label',
};

export default CustomTextInput;
