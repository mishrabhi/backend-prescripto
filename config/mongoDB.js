const mongoose = require("mongoose");
MONGODB_URI = "mongodb://localhost:27017";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connect(`${MONGODB_URI}/prescripto`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
