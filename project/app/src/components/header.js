import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/shared/logo.svg";

const Header = () => {
  return (
		<>
			<header>
				<div className='logo'>
					<NavLink href='/'>
						<img
							src={logo}
							alt='Space Travel Logo'
							title='Travel to Space'
						/>
					</NavLink>
					<hr />
				</div>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>
								<span>00</span>
								<p>Home</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/destination'>
								<span>01</span>
								<p>Destination</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/crew'>
								<span>02</span>
								<p>Crew</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/technology'>
								<span>00</span>
								<p>Technology</p>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
  );
}

export default Header;