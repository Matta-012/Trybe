import React from 'react';
import PropTypes from 'prop-types';
import CustomTextInput from '../CustomTextInput';

function ExpensesFormTextInputs({ value, handleChange, description }) {
  return (
    <>
      <CustomTextInput
        id="value-input"
        classes="form-label d-flex align-items-center"
        name="value"
        value={ value }
        type="text"
        labelName="Valor:"
        testID="value-input"
        handleChange={ handleChange }
      />

      <CustomTextInput
        id="description-input"
        classes="form-label d-flex align-items-center"
        name="description"
        value={ description }
        type="text"
        labelName="Descrição:"
        testID="description-input"
        handleChange={ handleChange }
      />
    </>
  );
}

ExpensesFormTextInputs.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExpensesFormTextInputs;
