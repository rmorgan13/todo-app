const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const controllers = require("./controllers");

const Model = require("./models");

const PORT = process.env.PORT || 5500;

app.use("/api", controllers);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("I'm running");
  });
});
