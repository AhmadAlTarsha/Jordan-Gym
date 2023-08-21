const ReviewModel = require("../models/review");

const createNewReview = (req, res) => {
    const { comment, commenter } = req.body;
    const newReview = new ReviewModel({ comment, commenter });
    newReview
      .save()
      .then((result) => {
        res.status(201).json({
          success: true,
          message: `comment created`,
          comment: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          
          success: false,
          message: `Server `,
          err: err.message,
        });
      });
  };

  module.exports={createNewReview}