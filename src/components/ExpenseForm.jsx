import React, { useState, useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const { dispatch } = useContext(BudgetContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: Math.random(),
      name,
      cost: parseFloat(cost),
    };

    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <input
            required="required"
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="col-sm">
          <input
            required="required"
            type="number"
            className="form-control"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
            placeholder="Cost"
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
