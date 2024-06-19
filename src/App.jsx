import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Header from './components/Header';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';

const App = () => {
  return (
    <BudgetProvider>
      <div className="container">
        <Header />
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <Expenses />
        <h3 className="mt-3">Add Expense</h3>
        <ExpenseForm />
      </div>
    </BudgetProvider>
  );
};

export default App;
