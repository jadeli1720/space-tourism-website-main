import React from 'react';
import changeBackground from './background';

const Homepage = () => {
	window.addEventListener('load', changeBackground('homepage'))

	return (
		<div>
			<p>This is the Homepage Page</p>
		</div>
	)
};

export default Homepage;
