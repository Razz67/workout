import Sidebar from "../../components/sidebar";
import "./home.css"
import Library from "../library";
import { Routes, Route } from "react-router-dom";
import Feed from "../feed";
import Trending from "../trending";
import Player from "../player";
import Favorites from "../favorites";

export default function MusicHome() {
	return (
		<div className="main-body">
			<Sidebar />
			<Routes>
				<Route path="/" element={<Library />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/trending" element={<Trending />} />
				<Route path="/feed" element={<Player />} />
				<Route path="/feed" element={<Favorites />} />
			</Routes>
		</div>
	);
}
