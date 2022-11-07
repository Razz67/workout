const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

// connect model data(workoutModel.js) to the routes
// Get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET All Workouts'});
});

// Get one workout
router.get('/:id', (req, res) => {
    res.json({msg: 'GET One Workout'});
});

// POST a workout 
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body;
    try {
        const workout = await Workout.create({
            title,
            reps,
            load
        })
        res.status(200).json(workout);
    }
 catch (error) { 
    res.status(400).json({error: error.message});
} 
});



// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a Workout'});
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a Workout'});
});


module.exports = router;