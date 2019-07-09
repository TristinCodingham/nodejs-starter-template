const express = require("express");
const router = express.Router();

const fetch = require("node-fetch");

router.get("/api1", (req, res) => {
  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => res.send(data.data.memes));
});

router.get("/api2", (req, res) => {
  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => res.send(data.data.memes));
});

module.exports = router;
