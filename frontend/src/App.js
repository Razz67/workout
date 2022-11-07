// Path: frontend\src\index.
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages && Components
import Home from './pages/Home';

function App() {
  return (
		<div className="App">
			<Router>
				<div className="pages">
					<Routes>
					<Route
						path="/"
						element={<Home />} 
					/>
						
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
