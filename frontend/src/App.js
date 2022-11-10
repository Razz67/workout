// Path: frontend\src\index.
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages && Components
import Home from './pages/Home';
import MyNavbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
		<div className="App">
			<Router>
			<MyNavbar />
				<div className="pages">
					<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
