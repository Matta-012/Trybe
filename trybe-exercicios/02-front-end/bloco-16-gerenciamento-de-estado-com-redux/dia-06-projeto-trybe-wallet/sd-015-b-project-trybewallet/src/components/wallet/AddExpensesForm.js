import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesFormDropdownInputs from './ExpensesFormDropdownInputs';
import ExpensesFormTextInputs from './ExpensesFormTextInputs';
import { fetchAPI, addExpense, submitEditedExpense } from '../../actions';
import currencyAPI from '../../helpers/currencyAPI';

class AddExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.DEFAULT_STATE = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.state = this.DEFAULT_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.dispatchFetchAPI = this.dispatchFetchAPI.bind(this);
    this.fetchCurrencyAPI = this.fetchCurrencyAPI.bind(this);
    this.handleEditExpense = this.handleEditExpense.bind(this);
  }

  componentDidMount() {
    this.dispatchFetchAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchCurrencyAPI() {
    try {
      const data = await currencyAPI();

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async handleAddExpense() {
    const { dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const exchangeRates = await this.fetchCurrencyAPI();

    const payload = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    dispatch(addExpense(payload));

    this.setState(this.DEFAULT_STATE);
  }

  dispatchFetchAPI() {
    const { dispatch } = this.props;

    dispatch(fetchAPI());
  }

  handleEditExpense() {
    const { dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const payload = {
      value,
      description,
      currency,
      method,
      tag,
    };

    dispatch(submitEditedExpense(payload));
    this.setState(this.DEFAULT_STATE);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { isEditing } = this.props;

    if (isEditing) {
      this.handleEditExpense();
    } else {
      this.handleAddExpense();
    }
  }

  render() {
    const { isEditing } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <section>
        <form
          className="d-flex align-items-center"
          onSubmit={ this.handleSubmit }
        >
          <ExpensesFormTextInputs
            value={ value }
            description={ description }
            handleChange={ this.handleChange }
          />
          <ExpensesFormDropdownInputs
            currencyValue={ currency }
            method={ method }
            tag={ tag }
            handleChange={ this.handleChange }
          />
          {!isEditing ? (
            <button type="submit" className="btn btn-primary">
              Adicionar despesa
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Editar despesa
            </button>
          )}
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  isEditing: state.wallet.isEditing,
});

AddExpensesForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AddExpensesForm);
