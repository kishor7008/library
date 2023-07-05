const express = require("express");
const cors = require("cors");
const route = require("./routes/route");
const connection = require("./config/connection");
const app = express();
app.use(express.json());
app.use(cors());
connection();
app.get("/", (req, res) => {
  res.send("Memorial Library");
});
app.use("/", route);
app.listen(4000);
