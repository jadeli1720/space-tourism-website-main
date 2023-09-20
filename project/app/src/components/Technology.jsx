import React from 'react';
import changeBackground from './background';


const Technology = () => {
	window.onload = changeBackground('technologyPage');


	return (
		<div>
			<p>This is the Technology Page</p>
		</div>
	)
};

export default Technology;