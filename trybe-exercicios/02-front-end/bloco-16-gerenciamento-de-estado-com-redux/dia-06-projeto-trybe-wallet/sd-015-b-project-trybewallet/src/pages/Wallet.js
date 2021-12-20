import React from 'react';
import { connect } from 'react-redux';
import AddExpensesForm from '../components/wallet/AddExpensesForm';
import ExpensesTable from '../components/wallet/ExpensesTable';
import Header from '../components/wallet/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <AddExpensesForm />
          </section>
          <section>
            <ExpensesTable />
          </section>
        </main>
      </>
    );
  }
}

export default connect()(Wallet);
