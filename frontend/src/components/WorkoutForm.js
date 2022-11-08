import { useState } from "react";

const WorkoutForm = () => {
	// Create State
	const [title, setTitle] = useState("");
	const [reps, setReps] = useState("");
	const [load, setLoad] = useState("");
	const [error, setError] = useState(null);

	// Create a function to handle the submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, reps, load };

		// Send the workout to the database(axios)
		const response = await fetch("http://localhost:5000/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: { "Content-Type": "application/json" 
        },
	});
    const json = await response.json();

    if (!response.ok) {
        setError(json.error);
    }
    if (response.ok) {
        setTitle("");
        setReps("");
        setLoad("");
        setError(null);
        console.log('Workout added');
    }
};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h2>Create a Workout</h2>

			<label>Workout Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>

			<label>Load (in lbs):</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>

			<label>Reps:</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>

			<button>Add Workout</button>
            {error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
