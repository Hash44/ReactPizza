import { Fragment } from 'react';
import PizzaSummary from './PizzaSummary';
import AvailablePizza from './AvailablePizza';

const Pizza = () => {
	return (
		<Fragment>
			<PizzaSummary />
			<AvailablePizza />
		</Fragment>
	);
};

export default Pizza;
