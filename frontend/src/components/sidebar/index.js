import "./sidebar.css";
import SidebarButton from "./sidebarButton";


// Icons
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa"


export default function Sidebar() {
	return (
		<div className="sidebar-container">
			<img
				className="profile-img"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
				alt="profile"
			/>
			<div>
				<SidebarButton title="Feed" to="/Feed" icon={<MdSpaceDashboard />} />

				<SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />

				<SidebarButton title="Player" to="/player" icon={<FaPlay />} />

				<SidebarButton
					title="Favorites"
					to="/favorites"
					icon={<MdFavorite />}
				/>

				<SidebarButton title="Library" to="/" icon={<IoLibrary />} />
			</div>
			<SidebarButton title="Workouts" to="/" icon={<FaHome />} />
		</div>
	);
}
