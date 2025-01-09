const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/mongoDB");
const connectCloudinary = require("./config/cloudinary");
const adminRouter = require("./routes/adminRoute");
const doctorRouter = require("./routes/doctorRoute");
const userRouter = require("./routes/userRoute");

//app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB(); //MongoDB connection
connectCloudinary(); //cloudinary connection

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin/", adminRouter); //localhost:4000/api/admin/
app.use("/api/doctor", doctorRouter); //localhost:4000/api/doctor/
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log("Server up and running on", PORT);
});
