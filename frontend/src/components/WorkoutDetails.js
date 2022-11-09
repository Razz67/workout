import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Card } from "react-bootstrap";

export const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();

	const handleClick = async () => {
		const response = await fetch(
			"http://localhost:5000/api/workouts/" + workout._id,
			{
				method: "DELETE",
			}
		);
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<>
		<div className="workout-details">
			<Card>
				<Card.Body>
					<Card.Title>
						<h4>{workout.title}</h4>
					</Card.Title>
					<Card.Title>
						<strong>Load: </strong>
						{workout.load}(lbs)
					</Card.Title>
					<Card.Title>
						<strong>Reps: </strong>
						{workout.reps}
					</Card.Title>

					<p>{workout.createdAt}</p>
					<span onClick={handleClick}>delete</span>
				</Card.Body>
			</Card>
		</div>
		</>
	);
};
