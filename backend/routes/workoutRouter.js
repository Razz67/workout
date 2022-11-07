const express = require('express');

const router = express.Router();


// Get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET All Workouts'});
});

// Get one workout
router.get('/:id', (req, res) => {
    res.json({msg: 'GET One Workout'});
});

// POST a workout 
router.post('/', (req, res) => {
    res.json({msg: 'POST a Workout'});
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