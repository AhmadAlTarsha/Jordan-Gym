const express = require("express")

const { createNewGymPost,updateGymInfoById ,deleteGymById,getAllGym,getGymByOwner,getGymById} = require("../controllers/gymInfo");

const gymPostRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
gymPostRouter.post("/create",authentication,authorization("Add_Gym"),createNewGymPost)
gymPostRouter.put("/update/:id",authentication,authorization("Add_Gym"),updateGymInfoById)
gymPostRouter.delete("/delete/:id",authentication,authorization("Add_Gym"),deleteGymById)
gymPostRouter.get("/posts",authentication,getAllGym)
gymPostRouter.get("/posts/:id",getGymByOwner)
gymPostRouter.get("/:id",getGymById)


module.exports = gymPostRouter;