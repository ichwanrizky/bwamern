import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import LandingPage from 'pages/LandingPage';

import "assets/scss/style.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
