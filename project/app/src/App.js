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
		<main className='App'>
			<Header />
				<Routes>
					<Route path='/' Component={Homepage} />
					<Route path='/destination' Component={Destination} />
					<Route path='/crew' Component={Crew} />
					<Route path='/technology' Component={Technology} />
				</Routes>
		</main>
	);
}

export default App;
