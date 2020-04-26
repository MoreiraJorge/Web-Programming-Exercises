var mongoose = require("mongoose");
var Review = require("../models/Review");

var ReviewController = {};

ReviewController.create = async function (req, res) {
    const result = await new Review(req).create();
    res.send(result)
    //res.redirect(`/employees/show/${result._id}`);
}

module.exports = ReviewController;