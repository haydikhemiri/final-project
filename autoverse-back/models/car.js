// require mongoose
const mongoose = require('mongoose');

// require Schema from mongoose
const Schema = mongoose.Schema

// create car schema

const carSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    autonomy: {
        type: Number,
        required: true
    },
    chargingTime: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    collection: "cars"
})

// export car model
module.exports = Car = mongoose.model("Car", carSchema)