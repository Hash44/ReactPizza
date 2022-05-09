import { Fragment } from 'react';
import pizzaImage from '../../Assets/Pizza.jfif';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactPizza</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={pizzaImage} alt='A table full of delisous food' />
			</div>
		</Fragment>
	);
};

export default Header;
