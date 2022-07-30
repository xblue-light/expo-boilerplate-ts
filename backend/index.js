require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const posts = [
  {
    username: "adambayer",
    title: "Loreal ipsum kioreal 1",
  },
  {
    username: "johndoe",
    title: "Loreal ipsum kioreal 2",
  },
  {
    username: "gordonslayer",
    title: "Loreal ipsum kioreal 3",
  },
];

app.get("/posts", authenticateRoute, (req, res) =>
  res.json(posts.filter((post) => post.username === req.userPayload.username))
);

app.post("/login", (req, res) =>
  // DO NOT USE IN PRODUCTION!
  // Here we simply want to return a new JWT w/o checking if our user exists or any other form of validation, just return the token.
  res.json(
    jwt.sign(
      {
        username: req.body.username,
        email: req.body.email,
      },
      `${process.env.SECRET_ACCESS_TOKEN}`
    )
  )
);

function authenticateRoute(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  // Here we want to verify that the JWT is valid so we need to provide our token and secret access token. The same secret that we used to sign the token initially.
  jwt.verify(token, `${process.env.SECRET_ACCESS_TOKEN}`, (err, jwtPayload) => {
    if (err) return res.sendStatus(403);
    console.log("=============");
    console.log(jwtPayload);
    req.userPayload = jwtPayload;
    next();
  });
}

app.listen(3000);
