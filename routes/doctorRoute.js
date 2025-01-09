const express = require("express");
const { doctorList } = require("../controllers/doctorController.js");

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);

module.exports = doctorRouter;
