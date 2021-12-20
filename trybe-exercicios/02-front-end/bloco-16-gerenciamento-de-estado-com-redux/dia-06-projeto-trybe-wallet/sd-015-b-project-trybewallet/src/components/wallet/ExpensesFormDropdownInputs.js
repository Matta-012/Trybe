import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomDropdown from '../CustomDropdown';
import { paymentMethodsList, tags } from '../../helpers/data';

function ExpensesFormDropdownInputs({
  handleChange,
  currencies,
  currencyValue,
  method,
  tag,
}) {
  // const currencyList = Object.keys(currencies
  // const currencyList = currencies
  //   .filter((currency) => currency !== 'USDT' && currency[0] !== 'DOGE')
  //   .map((currency) => currency);

  return (
    <>
      <CustomDropdown
        options={ currencies }
        handleChange={ handleChange }
        name="currency"
        labelName="Moeda:"
        testID="currency-input"
        value={ currencyValue }
      />
      <CustomDropdown
        options={ paymentMethodsList }
        handleChange={ handleChange }
        name="method"
        labelName="Método de Pagamento:"
        testID="method-input"
        value={ method }
      />
      <CustomDropdown
        options={ tags }
        handleChange={ handleChange }
        name="tag"
        labelName="Tag:"
        testID="tag-input"
        value={ tag }
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpensesFormDropdownInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencyValue: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

// ExpensesFormDropdownInputs.defaultProps = {
//   currencies: [],
// };

export default connect(mapStateToProps)(ExpensesFormDropdownInputs);
