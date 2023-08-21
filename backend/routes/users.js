const express = require("express");

const { register,login,getAllUsers } = require("../controllers/users");

const {
    authentication
   } = require("../middleware/authentication");
   const {
       authorization
      } = require("../middleware/authorization");
const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login",login);
usersRouter.get("/users",getAllUsers);

module.exports = usersRouter;