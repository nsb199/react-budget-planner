import React, { useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const Budget = () => {
  const { state } = useContext(BudgetContext);

  return (
    <div className="alert alert-secondary">
      Budget: Rs.{state.budget}
    </div>
  );
};

export default Budget;
