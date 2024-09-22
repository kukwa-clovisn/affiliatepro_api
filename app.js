// api configuration
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const { body } = require("express-validator");

// initializing express app
const app = express();

// configuring api port
const port = process.env.port || 3003;

// configuring mongobd uri

const mongo_uri = process.env.mongo_uri;

// custom middlewares configuration

app.use(bodyParser.json());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(helmet());

// // api routes
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const userRoute = require("./routes/user");
const tokenRoute = require("./routes/token");
const courseRoute = require("./routes/course");
const appointmentRoute = require("./routes/appointment");
const subscribeRoute = require("./routes/subscribe");
const postRoute = require("./routes/post");

// api route configurations
app.use(
  "/api/signin",
  [
    // Example validation rules
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  loginRoute
);

app.use(
  "/api/signup",
  [
    // Example validation rules
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  signupRoute
);
app.use(
  "/api/subscribe",
  [body("email").isEmail().normalizeEmail()],
  subscribeRoute
);

app.use("/api/users", userRoute);
app.use("/api/token", tokenRoute);
app.use("/api/course", courseRoute);
app.use("/api/post", postRoute);

app.use(
  "/api/appointment",
  [
    // Example validation rules
    body("email").isEmail().normalizeEmail(),
  ],
  appointmentRoute
);

app.use("/", (req, res) => {
  res.send("Gospelfxtrader-api");
});

// api listening only when the database is fully connected...
mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Atlas connection established successfully");
});

app.listen(port);
