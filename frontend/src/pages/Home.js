import axios from "axios";
import { useEffect, useState } from "react";
// Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


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
                <WorkoutForm />
			</div>


		</>
	);
};

export default Home;
