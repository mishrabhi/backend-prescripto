const express = require("express");
const {
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
} = require("../controllers/doctorController.js");
const authDoctor = require("../middlewares/authDoctor.js");

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList); //list of doctors
doctorRouter.post("/login", loginDoctor); //doctor login to panel
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor); //doctor appointments
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete); //complete-appointments
doctorRouter.get("/cancel-appointment", authDoctor, appointmentCancel); //cancel-appointments

module.exports = doctorRouter;
