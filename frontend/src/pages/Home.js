import axios from "axios";
import { useEffect, useState } from "react";
// Components
import WorkoutDetails from "../components/WorkoutDetails";



const Home = () => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/api/workouts").then((data) => {
			console.log(data);
			setWorkouts(data?.data);
		});
	}, []);

	return (
		<>
			<div className="home">
				<div className="workouts">
					{workouts &&
						workouts.map((workout) => (
                            <WorkoutDetails key={workout._id} workout={workout} />
                        ))}
				</div>
			</div>


		</>
	);
};

export default Home;
