const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculatorSchema = new Schema({
    amount: {
        type: String
    },

    investment: {
        type: String
    },

    interest: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now()
    }
}, {timestamps: true});

module.exports = mongoose.model("Interest", calculatorSchema);interest