const express = require("express")

const { createNewGymPost,updateGymInfoById ,deleteGymById,getAllGym} = require("../controllers/gymInfo");

const gymPostRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
gymPostRouter.post("/create",authentication,authorization("Add_gym"),createNewGymPost)
gymPostRouter.put("/update/:id",authentication,authorization("Add_gym"),updateGymInfoById)
gymPostRouter.delete("/delete/:id",authentication,authorization("Add_gym"),deleteGymById)
gymPostRouter.get("/posts",getAllGym)


module.exports = gymPostRouter;