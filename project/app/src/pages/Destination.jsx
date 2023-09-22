import React, { useState } from 'react';
import changeBackground from '../components/background';
import data from '../data/data.json';
import { Image, SubHeading } from '../components';

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

	// console.log(destinationData)
	
	const changeDestinationData = (item) =>{
		setDestinationData({
			id: item.id,
			name: item.name,
			pngImg: item.images.png,
			webPImg: item.images.webp,
			description: item.description,
			distance: item.distance,
			travel: item.travel,
		});
	}

	return (
		<div id='destinationPage'>
			<section className='destination-left-container'>
				<SubHeading number='1' heading='Pick Your Destination' />
				<div className='img-wrapper'>
					<Image
						pngImg={destinationData.pngImg}
						webPImg={destinationData.webPImg}
						name={destinationData.name}
						page='destination'
					/>
				</div>
			</section>
			<section className='destination-right-container'>
				<div className='destination-nav-wrapper'>
					{celestialBodies.map((item) => {
						return (
							<div
								key={item.id}
								className={`destination-link ${
									item.name === destinationData.name
										? 'active'
										: ''
								}`}
								id={item.name.toLowerCase()}
								onClick={() => changeDestinationData(item)}
							>
								{item.name}
							</div>
						);
					})}
				</div>
				<h1 className='celestial-bodies-title'>
					{destinationData.name}
				</h1>
				<p className='page-paragraph'>{destinationData.description}</p>
				<div className='divider' ></div>
				<div className='stats-container'>
					<div className='distance-wrapper'>
						<p className='title'>avg. distance</p>
						<p className='stat'>
							{destinationData.distance}
						</p>
					</div>
					<div className='travel-wrapper'>
						<p className='title'>est. travel time</p>
						<p className='stat'>{destinationData.travel}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Destination;
