const mongoose = require("mongoose")

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },

  type: {
    type: String,
    trim: true,
    required: "Type of workout is required"
  },

  weight: {
    type: Number,
    required: "Weight amount is required"
  },

  sets: {
    type: Number,
    required: "Number of sets required"
  },

  reps: {
    type: Number,
    required: "Number of reps required"
  },

  duration: {
    type: Number,
    required: "Duration of workout required"
  }
});

const Workout = mongoose.model("Workout", gainsSchema);

module.exports = Workout;

