const express = require("express");
const axios = require("axios");
const cors = require("cors");
var bodyParser = require("body-parser");

const config = require("../config");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Alloy Unified API Demo App!");
});

/*
 *  @post /user/
 *  Creates a user
*/
app.post("/user/", async (req, res) => {
  if (!req.body.userId) {
    res.status(400).send("No userId provided");
  }

  const options = {
    method: "POST",
    url: "https://embedded.runalloy.com/2023-12/one/users",
    headers: {
      accept: "application/json",
      Authorization: `bearer ${config.apiKey}`,
      "content-type": "application/json",
    },
    data: { username: req.body.userId },
  };
  let response;
  try {
    response = await axios.request(options);
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not create user");
  }
});

/*
 *  @get /token/:userId
 *  Creates a user
*/
app.get("/token/:userId", async (req, res) => {
  const options = {
    method: "GET",
    url: `https://embedded.runalloy.com/2023-12/users/${req.params.userId}/token`,
    headers: {
      accept: "application/json",
      Authorization: `bearer ${config.apiKey}`,
    },
  };
  let response;
  try {
    response = await axios.request(options);
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).send("Could not generate token");
  }
});


// Set the server to listen on port 8989
app.listen(8989, () => {
  console.log("Server listening on port 8989");
});
