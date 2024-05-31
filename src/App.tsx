import { Routes, Route } from 'react-router-dom'

import './App.css';
import CastPage from './components/pages/cast';
import DetailsPage from './components/pages/details';
import HomePage from './components/pages/home';



const App = () => {

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cast' element={<CastPage />} />
			<Route path='/cast/:page' element={<DetailsPage />} />
		</Routes>
	)
}
export default App
