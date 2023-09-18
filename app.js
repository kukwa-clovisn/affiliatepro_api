// api configuration
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const { body } = require("express-validator");
// const ip = require("express-ip");
// initializing express app
const app = express();
// app.use(ip());

// configuring api port
const port = process.env.port || 3003;

// configuring mongobd uri
const mongo_uri = process.env.mongo_uri;
// custom middlewares configuration
// custom middlewares
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

// api routes
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
// const subscribeRoute = require("./routes/subscribe");
const userRoute = require("./routes/user");
const paymentRoute = require("./routes/payment");

// api route configurations
app.use(
  "/api/login",
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
    body("username").isString().trim(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  signupRoute
);
// app.use("/api/subscribe", subscribeRoute);
app.use("/api/users", userRoute);

app.use("api/pay", paymentRoute);

// api listening only when the database is fully connected...
mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`codingherald hacking -- http://localhost:${port}...`);
    });
  })
  .catch((err) => console.log(err));
