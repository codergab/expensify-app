import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();
// const unSubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

store.dispatch(addExpense({ amount: 200, description: 'Water Bill', createdAt: 0}));
store.dispatch(addExpense({ amount: 250, description: 'Electricity Bill', createdAt: 10}));
store.dispatch(setTextFilter('Water'));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);

ReactDOM.render(<AppRouter />, document.getElementById('app'));