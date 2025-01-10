const express = require("express");
const {
  doctorList,
  loginDoctor,
} = require("../controllers/doctorController.js");

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);

module.exports = doctorRouter;
