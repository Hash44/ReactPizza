import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Pizza from './components/Pizza/Pizza';

function App() {
	return (
		<Fragment>
			<Header />
			<main>
				<Pizza />
			</main>
		</Fragment>
	);
}

export default App;
