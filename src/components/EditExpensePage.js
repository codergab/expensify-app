import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return (
	<h1>Edit Expense {props.match.params.id}</h1>
	);

}

export default EditExpensePage;