import React, { useState } from 'react';
import changeBackground from './background';
import celestialBodies from '../data/data.json';

const Destination = () => {
	window.onload = changeBackground('destinationPage');

	const [destination, setDestination] = useState();

	return (
		<div id='destinationPage'>
			<p>This is the Destination Page</p>
		</div>
	);
};

export default Destination;
