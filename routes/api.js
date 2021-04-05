const router = require("express").Router();
const Workout = require("../models/workout.js");

//create a new workout
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//add exercise to the most recent workout plan
router.put("/api/workout/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercise: req.body } },
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



//add new exercises to a workout plan

//view combined weight of mutiple exercises from the past seven workouts on the stats page
//aggregate

//view the total duration of each workout from the past seven workouts on the stats page
//aggergate
module.exports = router;