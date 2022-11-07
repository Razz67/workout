const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const workoutsRoute = require("./routes/workoutRouter");

// Create express app
const app = express();

// Middleware
// allows us to use json returned from the request in our routes
// any request that comes in, it will parse the body and put it on req.body
app.use(express.json());

// Just to see requests path and method in the console
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// react to requests from (Routes)
app.use("/api/workouts", workoutsRoute);

// Connect to MONGO_DB
mongoose
	.connect(process.env.MONGO_DB)
	.then(() => {
		// Then listen for requests(port 5000)
		app.listen(process.env.PORT, () => {
			console.log("Connected to Mongo_Db and Listening on port ", process.env.PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});
