const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;
const usersRouter = require("./routes/users");
const rolesRouter = require("./routes/roles");
const commentRouter = require("./routes/comment");
const gymPostRouter = require("./routes/gymInfo");

app.use(cors());
app.use(express.json());

app.use("/users",usersRouter)
app.use("/comment",commentRouter)
app.use("/gym",gymPostRouter)
app.use("/create",rolesRouter)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
