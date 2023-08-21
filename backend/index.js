const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;
const usersRouter = require("./routes/users");
const rolesRouter = require("./routes/roles");
const reviewRouter = require("./routes/review");

app.use(cors());
app.use(express.json());

app.use("/users",usersRouter)
app.use("/",reviewRouter)

//app.use("/",usersRouter)
//app.use("/create",rolesRouter)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
