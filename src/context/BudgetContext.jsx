import React, { createContext, useReducer } from 'react';

const BudgetContext = createContext();

const budgetReducer = (state, action) => {
    switch (action.type) {
      case 'SET_BUDGET':
        return { ...state, budget: action.payload };
      case 'ADD_EXPENSE':
        return { ...state, expenses: [...state.expenses, action.payload] };
      case 'REMOVE_EXPENSE':
        return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.payload) };
      default:
        return state;
    }
  };
  

export const BudgetProvider = ({ children }) => {
  const initialState = {
    budget: 2000,
    expenses: [],
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContext;
