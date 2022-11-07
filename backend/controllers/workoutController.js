const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// Create functions for the routes
// Get all workouts from the database
const getAllWorkouts = async (req, res) => {
	try {
		const workouts = await Workout.find({}).sort({ createdAt: -1 }); // Sort by date
		res.status(200).json(workouts);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get one workout from the database
const getOneWorkout = async (req, res) => {
	// Get the id from the url
	const { id } = req.params;

	// Check if the id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No workout with that id" });
	}

	// Get the workout
	const workout = await Workout.findById(id);

	// Check if the workout exists
	if (!workout) {
		return res.status(404).json({ error: "Workout not found" });
	}

	// Return the workout
	else res.status(200).json(workout);
};

// POST a workout to the database
const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body;

	// Add data to the database
	try {
		const workout = await Workout.create({
			title,
			reps,
			load,
		});
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// DELETE a workout from the database
const deleteWorkout = async (req, res) => {
	// Get the id from the route parameters
	const { id } = req.params;

	// Check if the id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No workout with that id" });
	}

    // if id is valid, delete the workout
	const workout = await Workout.findOneAndDelete({ _id: id });

	// Check if the workout exists
	if (!workout) {
		return res.status(404).json({ error: "Workout not found" });
	}

	res.status(200).json(workout);
};

// UPDATE a  workout in the database
const updateWorkout = async (req, res) => {
	// Get the id from the route parameters
	const { id } = req.params;

	// Check if the id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No workout with that id" });
	}

	const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
	});

	// Check if the workout exists
	if (!workout) {
		return res.status(404).json({ error: "Workout not found" });
	}
    	res.status(200).json(workout);
};


// Export the functions
module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
