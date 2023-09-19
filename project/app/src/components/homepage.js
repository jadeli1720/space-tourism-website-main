import React from 'react';
import { Link } from 'react-router-dom';
import changeBackground from './background';
import { navItems } from '../data/utils';

const Homepage = () => {
	window.addEventListener('load', changeBackground('homepage'))

	return (
		<div id='homepage'>
			<section className='hp-text-container'>
				<h4 className='page-title'>So, you want to travel to</h4>
				<h1>Space</h1>
				<p className='page-paragraph'>
					Let’s face it; if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the
					edge of it. Well sit back, and relax because we’ll give you
					a truly out of this world experience!
				</p>
			</section>
			<section className='explore-btn'>
				<div className='container'>
					<Link to={navItems[1].href}>Explore</Link>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
