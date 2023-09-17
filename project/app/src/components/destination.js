import React from 'react';
import changeBackground from './background';

const Destination = () => {

	window.onload = changeBackground('destinationPage');


	return (
		<div>
			<p>This is the Destination Page</p>
		</div>
	)
};

export default Destination;
