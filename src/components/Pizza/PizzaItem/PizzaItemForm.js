import React from 'react';
import classes from './PizzaItemForm.module.css';

const PizzaItemForm = (props) => {
	return (
		<form className={classes.form} action=''>
			<input type='text' />
			<button>+ Add</button>
		</form>
	);
};

export default PizzaItemForm;
