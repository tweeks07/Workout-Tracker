const mongoose = require('mongoose');
const schema = mongoose.schema;

const workoutSchema = new mongoose.Schema (

{
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: { 
          type: String,
          trim: true,
          required: "type of excersise required",
        },
        name: {
          type: String,
          trim: true,
          required: "excercise name required",
        },
        duration: {
          type: Number,

          required: "time of excercise required",
        },
        weight: {
          type: Number,
          required: "weight required",
        },
        reps: {
          type: Number,
          required: "number of reps required",
        },
        sets: {
          type: Number,
          required: "number of sets required",
        },
        distance: {
          type: Number,
          required: "number of miles required",
        },
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;