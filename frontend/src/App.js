// CSS: frontend
import "./components/styles/music.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Pages && Components
import Home from "./pages/Home";
import MyNavbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Music from "./pages/Music";
import Library from "./screens/library";
import Feed from "./screens/feed";
import Trending from "./screens/trending";
import Player from "./screens/player";
import Favorites from "./screens/favorites";

function App() {
	const { user } = useAuthContext();

	return (
		<div className="App main-body">
			<Router>
				<MyNavbar />
				<div className="pages">
					<Routes>
						{/* user is logged in navigate to home if not go to login */}
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						/>

						{/* if user is not logged in navigate to login */}
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						/>

						{/* if user is not logged in navigate to signup */}
						<Route
							path="/signup"
							element={!user ? <Signup /> : <Navigate to="/" />}
						/>

						{/* if user is logged in make music accessible if not go to login */}
						<Route
							path="/music"
							element={user ? <Music /> : <Navigate to="/home" />}
						/>
						
						<Route path="/" element={<Library />} />
						<Route path="/feed" element={<Feed />} />
						<Route path="/trending" element={<Trending />} />
						<Route path="/player" element={<Player />} />
						<Route path="/favorite" element={<Favorites />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
