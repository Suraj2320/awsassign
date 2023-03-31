const mongoose = require("mongoose");
// require("dotenv").config()

mongoose.set("strictQuery", false);

const connect = mongoose

  .connect(
    process.env.MONGODB_URL.toString()
    // done
  )
  .then(() => console.log("Connected to DataBase"))
  .catch((err) => console.log(err.message));

module.exports = connect;