const gymPostModel = require("../models/gymInfo");

const createNewGymPost = (req, res) => {
const userId=req.userId
    const { gymOwner, name, location,nameOfTriner,mempershipPrice,facilities} = req.body;
    const newGymPost = new gymPostModel({gymOwner, name, location,nameOfTriner,mempershipPrice,facilities });
    newGymPost
      .save()
      .then((result) => {
        res.status(201).json({
          success: true,
          message: `Gym Post created`,
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
  const  updateGymInfoById =  (req, res) => {
    const  newname = req.body.name;
    const  newLocation  = req.body.location;
    const  newnameOfTriner  = req.body.nameOfTriner;
    const  newMempershipPrice  = req.body.mempershipPrice;
    const  newFacilities = req.body.facilities;
   
    const  gymId  = req.params.id;
  
    gymPostModel
      .findOneAndUpdate(
         {_id: gymId} ,
         {name:newname}  ,
         {new: true}
       
      )
      .then((result) => {
        if (!result) {
          return  res.status(404).json({
              success: false,
              message: `The gym with id => ${articlesId} not found`,
              
            })  
          }
        
        res.status(200).json({
          success: true,
          message: "gymInfo updated",
          article: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server Error",
          error: err,
        });
      });
      
  };

  const deleteGymById = (req, res) => {
    const id = req.params.id;
    gymPostModel
      .findByIdAndDelete(id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `The gym with id => ${id} not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `gym deleted`,
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
  const getAllGym = (req, res) => {
  //  const userId = req.token.userId;
    gymPostModel
      .find().populate("gymOwner", "firstName -_id")
       
      .exec()
      .then((gym) => {
        if (gym.length) {
          res.status(200).json({
            success: true,
            message: `All GymPost`,
           // userId: userId,
            gym: gym
          });
        } else {
          res.status(200).json({
            success: false,
            message: `No gymPost Yet`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  };
  const getArticlesByOwner = (req, res) => {
    let gymowner= req.params.id;
  console.log(gymowner);
    gymPostModel
      .find({ gymOwner: gymowner })
      .then((gym) => {
        if (!gym.length) {
          return res.status(404).json({
            success: false,
           
          });
        }
        res.status(200).json({
          success: true,
          
          gym: gym,
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
  module.exports={createNewGymPost,updateGymInfoById,deleteGymById,getAllGym,getArticlesByOwner}