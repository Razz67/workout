import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import MediaComponent from "../components/Media";

// components
import {WorkoutDetails} from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import '../components/styles/home.css'

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("http://localhost:5000/api/workouts");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		fetchWorkouts();
	}, [dispatch]);

	return (
		<div className="video-holder">
			<div className="video-overlay">
				<div className="video-content container h-100">
					<MediaComponent />
				</div>
			</div>
				<div className="home">
					<div className="workouts">
						{workouts &&
							workouts.map((workout) => (
								<WorkoutDetails workout={workout} key={workout._id} />
							))}
					</div>
					<WorkoutForm />
					</div>
				</div>
	);
};

export default Home;
