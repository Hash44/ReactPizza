import Card from '../UI/Card';
import PizzaItem from './PizzaItem/PizzaItem';
import classes from './AvailablePizza.module.css';

const DUMMY_PIZZA = [
	{
		id: 'm1',
		name: 'Pepperoni',
		description: 'Classic pepperoni pizza',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'margarita',
		description: 'italian fresh cheese and tomato sauce!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Barbecue Burger',
		description: 'pizza with meat sauce and meat mixture and BBQ sauce',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Green Pepperoni',
		description: 'Pepperoni and green pepper with smoked italian cheese mix',
		price: 18.99,
	},
];

const AvailablePizza = () => {
	const pizzaList = DUMMY_PIZZA.map((pizza) => (
		<PizzaItem
			key={pizza.id}
			name={pizza.name}
			description={pizza.description}
			price={pizza.price}
		/>
	));

	return (
		<section className={classes.pizza}>
			<Card>
				<ul>{pizzaList}</ul>
			</Card>
		</section>
	);
};

export default AvailablePizza;
