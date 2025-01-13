const express = require("express");
const {
  doctorList,
  loginDoctor,
  appointmentsDoctor,
} = require("../controllers/doctorController.js");
const authDoctor = require("../middlewares/authDoctor.js");
console.log("appointmentsDoctor:", appointmentsDoctor);
console.log("authDoctor:", authDoctor);

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
// doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);

module.exports = doctorRouter;
