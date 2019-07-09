// Express init
const express = require("express");
const app = express();

// Routes

const render = require("./routes/render");
const apis = require("./routes/api");

// MiddleWare
app.use("/", render);
app.use("/api", apis);
app.use(express.static(__dirname + "/public"));

// Body-parser
// express.json()
// view engine

// Port config
const PORT = process.env.PORT || 5000;

// Server port init
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
