const express = require("express");
const {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
} = require("../controllers/adminController");
const upload = require("../middlewares/multer");
const authAdmin = require("../middlewares/authAdmin.js");
const { changeAvailability } = require("../controllers/doctorController.js");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor); //admin=>add doctor
adminRouter.post("/login", loginAdmin); //admin login
adminRouter.post("/all-doctors", authAdmin, allDoctors); //get all doctors
adminRouter.post("/change-availability", authAdmin, changeAvailability); //change availability of doctor
adminRouter.get("/appointments", authAdmin, appointmentsAdmin); //check doctors appointments
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel); //cancel doctor appointments
adminRouter.get("/dashboard", authAdmin, adminDashboard);

module.exports = adminRouter;
