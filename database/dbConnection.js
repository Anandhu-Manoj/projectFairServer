const mongoose = require("mongoose");

const connectionString = process.env.MONGOCONNECTIONSTRING;

mongoose
  .connect(connectionString)
  .then(() => console.log("successfully connected with mongodb atlas"))
  .catch((err) => {
    console.log("mongo connection failed");
    console.log(err);
  });
