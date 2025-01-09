const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
} = require("../controllers/userController");
const authUser = require("../middlewares/authUser");
const upload = require("../middlewares/multer");

const userRouter = express.Router();

userRouter.post("/register", registerUser); //register new user
userRouter.post("/login", loginUser); //user login
userRouter.get("/get-profile", authUser, getProfile); //single user profile
//update user profile
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);
//book-appointment
userRouter.post("/book-appointment", authUser, bookAppointment);

module.exports = userRouter;
