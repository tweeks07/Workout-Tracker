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
          required: "What type of exercise is this?",
        },
        name: {
          type: String,
          trim: true,
          required: "What is the name of the exercise?",
        },
        duration: {
          type: Number,

          required: "How long will the exercise last?",
        },
        weight: {
          type: Number,
        
        },
        reps: {
          type: Number,
          
        },
        sets: {
          type: Number,
          
        },
        distance: {
          type: Number,
          
        },
      },
    ],
  });



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;