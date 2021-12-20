import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, editingExpense } from '../../actions';

class ExpensesTableData extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }

  handleDeleteBtn(id) {
    const { expenses, dispatch } = this.props;

    const filteredExpenses = expenses.filter((expense) => expense.id !== id);

    dispatch(removeExpense(filteredExpenses));
  }

  render() {
    const { expenses, dispatch } = this.props;
    const dataCell = expenses.map((expense, index) => {
      const { currency } = expense;
      const value = parseFloat(expense.value);
      const currencyName = expense.exchangeRates[currency].name
        .split('/Real Brasileiro')
        .join('');
      const askPrice = parseFloat(expense.exchangeRates[currency].ask);
      const convertedValue = askPrice * value;

      const data = (
        <tr key={ index }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{value}</td>
          <td>{currencyName}</td>
          <td>{askPrice.toFixed(2)}</td>
          <td>{Math.round(convertedValue * 100) / 100}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="edit-btn"
              className="btn btn-warning"
              onClick={ () => dispatch(editingExpense(expense.id)) }
            >
              Editar
            </button>
            <button
              type="button"
              data-testid="delete-btn"
              className="btn btn-danger"
              onClick={ () => this.handleDeleteBtn(expense.id) }
            >
              Excluir
            </button>
          </td>
        </tr>
      );

      return data;
    });

    return dataCell;
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTableData.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ExpensesTableData);
