import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import changeBackground from '../components/background';
import data from '../data/data.json';

const Destination = () => {
	window.onload = changeBackground('destinationPage');
	const celestialBody = data.destinations;
	const [destinationData, setDestinationData] = useState({
		name: celestialBody[0].name,
		pngImg: celestialBody[0].images.png,
		webPImg: celestialBody[0].images.webp,
		description: celestialBody[0].description,
		distance: celestialBody[0].distance,
		travel: celestialBody[0].travel,
	});

	const navigate = useNavigate();
	// console.log('Checking data', celestialBody[0].travel);

	return (
		<div id='destinationPage'>
			<section></section>
		</div>
	);
};

export default Destination;
