import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Tests - Remove an Expense
test('should setup be able to an expense', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

// Tests - Edit an expense
test('should setup be able to update an expense', () => {
	const updates = {
		note: 'a new note for testing'
	};
	const action = editExpense('abc123', updates);

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'abc123',
		updates: {
			note: 'a new note for testing'
		}
	});
});

test('should setup be able to add an expense', () => {});
