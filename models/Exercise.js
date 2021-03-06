const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: String,
        required: true,
        trim: true
    },
    popularity: {
        type: Number,
        trim: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    tutorial: {
        type: String,
        trim: true
    },
    // type: {
    //     type: String, // reps or time?
    //     required: true,
    //     trim: true,
    // },
    time: {
        type: Number,
        required: true,
        trim: true,
        min: 10,
        max: 300
    },
    target: [{
        type: String,
        required: true,
        trim: true
    }],
    tags: [{
        type: String,
        required: true,
        trim: true
    }]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;