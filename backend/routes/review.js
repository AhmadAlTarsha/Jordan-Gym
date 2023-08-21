const express = require("express")

const { createNewReview } = require("../controllers/review");


const reviewRouter = express.Router();



reviewRouter.post("/review", createNewReview);

module.exports = reviewRouter;
