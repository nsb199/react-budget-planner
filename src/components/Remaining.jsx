import React, { useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const Remaining = () => {
  const { state } = useContext(BudgetContext);
  const totalExpenses = state.expenses.reduce((total, expense) => total + expense.cost, 0);

  return (
    <div className="alert alert-success">
      Remaining: Rs.{state.budget - totalExpenses}
    </div>
  );
};

export default Remaining;
