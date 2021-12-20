import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesTableData from './ExpensesTableData';

function ExpensesTable({ expenses }) {
  return (
    <table>
      <thead>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </thead>
      <tbody>
        { expenses.length > 0 && <ExpensesTableData /> }
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
