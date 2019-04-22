import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, note, dispatch }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h4>{description}</h4>
		</Link>
		<h6>
			{amount} - {moment(createdAt).format('MMMM Do, YYYY')}
		</h6>
		<p>{note}</p>
	</div>
);

export default ExpenseListItem;
