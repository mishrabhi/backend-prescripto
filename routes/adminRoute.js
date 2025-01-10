const express = require("express");
const {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
} = require("../controllers/adminController");
const upload = require("../middlewares/multer");
const authAdmin = require("../middlewares/authAdmin.js");
const { changeAvailability } = require("../controllers/doctorController.js");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);

module.exports = adminRouter;
