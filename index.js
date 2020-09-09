const express = require("express");
const session = require("express-session");
const helmet = require("helmet");

const app = express();

var some_secret = "12345";
var some_jwt = "Im a jwt token";

app.use(helmet());
app.use(
  session({
    secret: some_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

app.get("/", function (req, res) {
  res.send("Hello! Do a get request to /login with correct code to get a jwt");
});

app.get("/login", function (req, res) {
  if (req.session.jwt_token && req.session.jwt_token === jwt_token) {
    console.log(req.session.jwt_token);
    res.send("You are already logged in");
  } else {
    var code = (req.headers.authorization || "").split(" ")[1] || "";

    if (code === some_secret) {
      req.session.jwt_token = some_jwt;
      res.send("You are now logged in!");
    } else {
      res.send("That is the wrong code!");
    }
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
