const commentModel = require("../models/comment");
const gymModel =require("../models/gymInfo")

const createNewComment = (req, res) => {
  const id=req.params.id
//const commenter=req.token.userId
    const { comment } = req.body;
    const newcomment = new commentModel({ comment,  });
    newcomment
    .save()
    .then((result) => {
      gymModel
        .findByIdAndUpdate(
         {_id:id},
          { $push: { comment: result._id } },
          { new: true },
         
        )
        .then(() => {
          res.status(201).json({
            success: true,
            message: `ok`,
            comment: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
     
      
  };
  const updateCommentById = (req, res) => {
    const id = req.params.id;
    const filter = req.body;
    Object.keys(filter).forEach((key) => {
      filter[key].toString().replaceAll(" ", "") == "" && delete filter[key];
    });
    commentModel
      .findByIdAndUpdate({ _id: id }, req.body, { new: true })
      .then((newcomment) => {
        if (!newcomment) {
          return res.status(404).json({
            success: false,
            message: `The comment with id => ${id} not found`,
          });
        }
        res.status(202).json({
          success: true,
          message: `comment updated`,
          comment: newcomment,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  };
  const deleteCommentById = (req, res) => {
    const id = req.params.id;
    commentModel
      .findByIdAndDelete(id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `The comment with id => ${id} not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `comment deleted`,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  };
  module.exports={createNewComment,updateCommentById,deleteCommentById}