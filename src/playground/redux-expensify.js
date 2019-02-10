import { createStore, combineReducers } from 'redux';

const demoStore = {
	expenses: [
		{
			id: 'KFNDFernre43',
			description: 'January Rent',
			note: 'This is why i spent this morning',
			amount: 54500,
			createdAt: 0
		}
	],
	filter: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};