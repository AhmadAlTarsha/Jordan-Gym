const express = require("express")

const { createNewComment,updateCommentById ,deleteCommentById} = require("../controllers/comment");


const commentRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

      commentRouter.post("/create/:id",authentication,authorization("Add_comment"),createNewComment);
      commentRouter.put("/update/:id",authentication,authorization("Add_comment"),updateCommentById);
      commentRouter.delete("/delete/:id",authentication,authorization("Add_comment"),deleteCommentById);

module.exports = commentRouter;
