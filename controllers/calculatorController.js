var calculatorSchema = require("../models/calculatorSchema");

//Piggyvest calculator homepage
exports.calculatorSchema_index = function(req, res) {
    res.send("Calculator Page");
};


//List of all calculated interest
exports.calculatorSchema_get = function(req, res) {
    res.send("Lists Of All Interest");
};


//Calculated interest
exports.calculatorSchema_post = function(req, res) {
    res.send("Interest Calculated");
};

//Deleted ineterest
exports.calculatorSchema_delete = function(req, res) {
    res.send("Interest Deleted");
};