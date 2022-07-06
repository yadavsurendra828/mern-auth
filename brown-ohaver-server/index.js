const winston = require("winston");
const cors = require("cors");
const bodyParser = require("body-parser");
/* const todos = require("./routes/todos");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn"); */
const User = require("./src/routes/adminApi/UserRoute");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path:'./.env'});
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Call exceptions.handle with a transport to handle exceptions
winston.exceptions.handle(
  new winston.transports.Console({ colorize: true, prettyprint: true }),
  new winston.transports.File({ filename: "./logs/logfile.log" })
);

process.on("unhandledRejection", (error) => {
  throw error;
});

winston.add(new winston.transports.File({ filename: "./logs/logfile.log" }));

require("dotenv").config();



app.use(express.json());
app.use(cors());

app.use("/api/admin", User); 

app.get("/", (req, res) => {
  res.send("welcome to the todos api...");
});

const uri = process.env.MONGO_DB_URL;
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));