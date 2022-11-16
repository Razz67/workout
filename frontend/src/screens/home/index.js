import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./home.css"
import Library from "../library";
import Feed from '../feed/feed'
import Trending from '../trending/trending'
import Player from '../player/player'
import Favorites from '../favorites/favorites'


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
