const express = require("express");
require("dotenv").config();
const workoutsRoute = require("./routes/workoutRouter");

// Create express app
const app = express();

// Middleware
// allows us to use json returned from the request in our routes
// any request that comes in, it will parse the body and put it on req.body
app.use(express.json());

app.use((req, res, next) => {
	// see requests path and method in the console
	console.log(req.path, req.method);
	next();
});

// react to requests from (Routes)
app.use("/api/workouts", workoutsRoute);

// Listen for requests(port 5000)
app.listen(process.env.PORT, () => {
	console.log("Listening on port ", process.env.PORT);
});
