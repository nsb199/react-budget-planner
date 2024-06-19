import React, { useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const Spent = () => {
  const { state } = useContext(BudgetContext);
  const totalExpenses = state.expenses.reduce((total, expense) => total + expense.cost, 0);

  return (
    <div className="alert alert-primary">
      Spent so far: Rs.{totalExpenses}
    </div>
  );
};

export default Spent;
