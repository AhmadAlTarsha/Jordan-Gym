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
  const updateGymInfoById = (req, res) => {
    const id = req.params.id;
    const filter = req.body;
    Object.keys(filter).forEach((key) => {
      filter[key].toString().replaceAll(" ", "") == "" && delete filter[key];
    });
   gymPostModel
      .findByIdAndUpdate({ _id: id }, req.body, { new: true })
      .then((newGym) => {
        if (!newGym) {
          return res.status(404).json({
            success: false,
            message: `The Gym with id => ${id} not found`,
          });
        }
        res.status(202).json({
          success: true,
          message: `Gym updated`,
          gym: newGym,
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
      .find().populate("gymOwner", "firstName -_id").populate("comment", 
      "comment -_id")
       
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
  const getGymByOwner = (req, res) => {
    let gymowner= req.params.id;
  console.log(gymowner);
    gymPostModel
      .find({ gymOwner: gymowner }).populate("gymOwner", "firstName -_id").populate("comment", 
      "comment -_id")
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
  const getGymById = (req, res) => {
    let id = req.params.id;
    gymPostModel
      .findById(id).populate("gymOwner", "firstName -_id").populate("comment", 
      "comment -_id")
      
      .exec()
      .then((gym) => {
        if (!gym) {
          return res.status(404).json({
            success: false,
            message: `The gym with id => ${id} not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `The gym ${id} `,
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
  module.exports={createNewGymPost,updateGymInfoById,deleteGymById,getAllGym,getGymByOwner,getGymById}


  