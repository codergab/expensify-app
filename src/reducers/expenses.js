// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		// Adds a new expense to the store
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		// Removes an expense from store
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		// Updates an existing expense in the store
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		// Returns State if no action matches
		default:
			return state;
	}
};
