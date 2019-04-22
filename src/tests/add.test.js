// Functions
const add = (a, b) => a + b;
const greet = (name = 'Anonymous') => `Hello ${name}!`;

// Tests
test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('should greet with name', () => {
	const greeting = greet('Gabriel');
	expect(greeting).toBe('Hello Gabriel!');
});

test('should greet with no name or Anonymous', () => {
	const greeting = greet();
	expect(greeting).toBe('Hello Anonymous!');
});
