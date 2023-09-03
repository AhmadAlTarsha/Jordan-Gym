const userModel = require("../models/users")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const register = (req, res) => {
  const { firstName, lastName, age, email, password, role } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    age,
    email,
    password,
    role //:"64e4f00a4eafc1ed54ea4b38",  //user role
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        user: result,
        
      });
      console.log(result);
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  userModel
    .findOne({ email })
    .populate("role", "-_id -__v")
    .then(async (result) => {
      if (!result) {
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
       
          role: result.role,
          name: result.firstName,
        
        };

        const options = {
          expiresIn: "120m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
          role: result.role,
       userId:result._id,
       name: result.firstName,
        });
        console.log(token);
      } catch (error) {
        throw new Error(error.message);
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
const getAllUsers= (req, res) => {
  userModel
    .find().populate("role","-_id -__v")
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All the users",
        users:result
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





module.exports = {
  register,login,getAllUsers
}