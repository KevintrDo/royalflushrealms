const mongoose = require("mongoose");

const BathroomSchema = new mongoose.Schema({
    itemKey: {
        required: false,
        type: Number,
        unique: true,
        trim: true,
    },
    img: {
        required: false,
        type: String,
        unique: false,
    },
    title: {
        required: false,
        type: String,
        trim: true,
        unique: false,
    },
    comment: {
        required: false,
        type: String,
        trim: true,
        unique: false,
    },
    date: {
        required: false,
        type: Date,
        trim: true,
        unique: false,
    },
    side: {
        required: false,
        type: String,
        unique: false,
    }
});

const Bathroom = mongoose.model('bathroom', BathroomSchema);

module.exports = Bathroom;