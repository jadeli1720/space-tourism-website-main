import React from 'react';
import { useNavigate } from 'react-router-dom';
import changeBackground from '../components/background';
import { navItems } from '../data/utils';

const Homepage = () => {
	window.addEventListener('load', changeBackground('homepage'));

	const navigate = useNavigate();

	const exploreBtnNavigation = (e) => {
		navigate(navItems[1].href);
	};

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
			<section className='explore-btn-wrapper'>
				<button onClick={exploreBtnNavigation}>Explore</button>
			</section>
		</div>
	);
};

export default Homepage;
