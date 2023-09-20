import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import changeBackground from '../components/background';
import data from '../data/data.json';
import { Image, SubHeading } from '../components';
import {Moon} from '../assets/images/destination/image-moon.png'

const Destination = () => {
	window.onload = changeBackground('destinationPage');
	const celestialBodies = data.destinations;
	const [destinationData, setDestinationData] = useState({
		id: celestialBodies[0].id,
		name: celestialBodies[0].name,
		pngImg: celestialBodies[0].images.png,
		webPImg: celestialBodies[0].images.webp,
		description: celestialBodies[0].description,
		distance: celestialBodies[0].distance,
		travel: celestialBodies[0].travel,
	});

	const navigate = useNavigate();

	// console.log('Checking data', celestialBodies[0].images.png);

	const changeDestinationData = (item) =>{
		console.log("clicked", item)
		setDestinationData({
			id: item.id,
			name: item.name,
			pngImg: item.pngImg,
			webPImg: item.webPImg,
			description: item.description,
			distance: item.distance,
			travel: item.travel
		})
	}

	return (
		<div id='destinationPage'>
			<section className='destination-left-container'>
				<SubHeading number='1' heading='Pick Your Destination' />
				{/* Not working for some reason. Not sure why */}
				<Image
					pngImg={destinationData.pngImg}
					webPImg={destinationData.webPImg}
					name={destinationData.name}
				/>
			</section>
			<section className='destination-right-container'>
				<div className='destination-nav-wrapper'>
					<div>
						{celestialBodies.map((item) => {
							return (
								<div
									key={item.id}
									className='destination-nav-link'
									id={item.name.toLowerCase()}
									onClick={() => changeDestinationData(item)}
								>
									{item.name}
								</div>
							);
						})}
					</div>
				</div>
				<h1 className='celestial-bodies-title'>{destinationData.name}</h1>
				<p className='page-paragraph'></p>
				<hr/>
				<div className='stats-container'>
					<div className='distance-wrapper'>
						<p className='distance-title'>avg. distance</p>
						<p className='distance-stat'>{destinationData.distance}</p>
					</div>
					<div className='travel-wrapper'>
						<p className='travel-title'>est. travel time</p>
						<p className='travel-stat'>{destinationData.travel}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Destination;
