import React, { useState } from 'react';
import changeBackground from '../components/background';
import data from '../data/data.json';
import { Image, SubHeading } from '../components';

const Crew = () => {
	window.onload = changeBackground('crewPage');
	const crewMembers = data.crew;
	const [crewData, setCrewData] = useState({
		id: crewMembers[0].id,
		name: crewMembers[0].name,
		pngImg: crewMembers[0].images.png,
		webPImg: crewMembers[0].images.webp,
		role: crewMembers[0].role,
		bio: crewMembers[0].bio,
	});

	console.log('crew page', crewMembers.length);

	const changeCrewMembersData = (item) => {
		setCrewData({
			id: item.id,
			name: item.name,
			pngImg: item.images.png,
			webPImg: item.images.webp,
			role: item.role,
			bio: item.bio
		});
	}

	return (
		<div id='crewPage'>
			<div id='backgroundOverlay'></div>
			<SubHeading number='2' heading='Meet Your Crew' />
			{/* Crew info */}
			<div className='crew-text-data'>
				<h2>{crewData.role}</h2>
				<h1>{crewData.name}</h1>
				<p className='page-paragraph'>{crewData.bio}</p>
			</div>
			{/* navigation */}
			<div className='crew-nav-wrapper'>
				{crewMembers.map((item, i) => {
					return(
						<div
							key={i}
							className={`crew-link ${
								item.name === crewData.name ? 'active' : ''
							} `}
							onClick={() => changeCrewMembersData(item)}
						>
						</div>
					)
				})}
			</div>
			{/* Image and dividing line */}
			<div className='image-wrapper'>
				<Image pngImg={crewData.pngImg} webPImg={crewData.webPImg} name={crewData.name} page='crew'/>

				<div className='divider'></div>
			</div>
		</div>
	);
};

export default Crew;
