import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/shared/logo.svg";
import hamburger from '../assets/images/shared/icon-hamburger.svg';
import closeIcon from '../assets/images/shared/icon-close.svg';
import { navItems } from "../data/utils";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);	
	//TODO: is there a way to tell what location we are at to set the active class. Would like to add inline class if statement

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
						/>
					</a>
				</div>
				<div className='border'></div>
				<nav className={`nav-menu ${openNav ? 'show' : ''}`}>
					<ul className='nav-list'>
						{navItems.map((item, i) => (
							<li
								className='nav-item'
								onClick={setActiveLink}
								key={i}
							>
								<NavLink to={item.href} className='link'>
									<span className='nav-number'>
										{item.number}
									</span>
									{item.name}
									<span className='active-border'></span>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				{/* TODO: can we use the bottom button instead */}
				{/* <button className='hamburger' onClick={() => console.log("clicked")}>
						<div />
						<div />
						<div />
					</button> */}
				<button
					className='hamburger'
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav === false ? (
						<img
							src={hamburger}
							alt='open navigation menu button'
						/>
					) : (
						<img
							src={closeIcon}
							alt='close navigation menu button'
						/>
					)}
				</button>
			</header>
		</>
  );
}

export default Header;