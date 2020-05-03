var mongoose = require("mongoose");
var Review = require("../models/Review");

var ReviewController = {};

ReviewController.create = async function (req, res) {

    const reviewData = {
        ...req.body,
        image: req.file ? `/images/${ req.file.filename }` : ''
    }

    const result = await new Review(reviewData).save();

    //console.log()
    //console.log(reviewData)
    //res.send(result)
    res.render('pages/reviewDetails', { item: result });
}

module.exports = ReviewController;