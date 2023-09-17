import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	Header,
	Homepage,
	Crew,
	Destination,
	Technology,
} from './components/index';


function App() {
	return (
		<main className='main'>
			<Header />
				<Routes>
					<Route exact path='/' Component={Homepage} />
					<Route exact path='/destination' Component={Destination} />
					<Route exact path='/crew' Component={Crew} />
					<Route exact path='/technology' Component={Technology} />
				</Routes>
		</main>
	);
}

export default App;
