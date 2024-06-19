import React, { useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const Expenses = () => {
  const { state, dispatch } = useContext(BudgetContext);

  const handleRemoveExpense = (id) => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: id });
  };

  return (
    <div className="expenses-section">
      
      <ul className="list-group">
        {state.expenses.map(expense => (
          <li key={expense.id} className="list-group-item expense-item">
            <span>{expense.name} - Rs.{expense.cost}</span>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveExpense(expense.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
