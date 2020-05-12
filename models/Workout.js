const mongoose = require('mongoose');

const SCHEMA = mongoose.Schema;

const WorkoutSchema = new SCHEMA({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: 
    {
        type: Array,
        default: []
    }
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;