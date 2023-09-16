import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/shared/logo.svg";
import hamburger from '../assets/images/shared/icon-hamburger.svg';
import closeIcon from '../assets/images/shared/icon-close.svg';

const Header = () => {

  const setActiveLink = e => {
    const links = document.getElementsByClassName('link')
    Array.from(links).forEach(el => el.classList.remove('.active'));
    e.target.classList.add('active')
  }


  return (
		<>
			<header>
				<div className='logo'>
					<a href='/'>
						<img
							src={logo}
							alt='Space Travel Logo'
							title='Travel to Space'
              className='logo'
						/>
					</a>
				</div>
				<div className='border'></div>
				<nav className='nav-menu'>
					<ul className='nav-list'>
						<li className="nav-item" onClick={setActiveLink}>
							<NavLink to='/' className="link">
								<span className='nav-number'>00</span>
								Home
							</NavLink>
						</li>
						<li className="nav-item" onClick={setActiveLink}>
							<NavLink to='/destination' className="link">
								<span className='nav-number'>01</span>
								Destination
							</NavLink>
						</li>
						<li className="nav-item" onClick={setActiveLink}>
							<NavLink to='/crew' className="link">
								<span className='nav-number'>02</span>
								Crew
							</NavLink>
						</li>
						<li className="nav-item" onClick={setActiveLink}>
							<NavLink to='/technology' className="link">
								<span className='nav-number'>00</span>
								Technology
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
  );
}

export default Header;