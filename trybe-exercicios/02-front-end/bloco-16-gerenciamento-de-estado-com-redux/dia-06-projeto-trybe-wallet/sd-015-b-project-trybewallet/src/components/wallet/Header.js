import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.sumTotalExpenses = this.sumTotalExpenses.bind(this);
  }

  sumTotalExpenses() {
    const { expenses } = this.props;

    if (expenses.length === 0) return '0';

    const totalSum = expenses.reduce((acc, expense) => {
      const { currency, value } = expense;
      const askPrice = parseFloat(expense.exchangeRates[currency].ask);

      acc += parseFloat(value) * askPrice;
      return acc;
    }, 0);

    return totalSum.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const expensesSum = this.sumTotalExpenses();
    return (
      <header className="d-flex">
        <div>
          <img src="" alt="" />
        </div>
        <p>
          Email:
          {' '}
          <span data-testid="email-field">{ email }</span>
          {' '}
        </p>
        <p>
          Despesa total: R$
          {' '}
          <span data-testid="total-field">{ expensesSum }</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
