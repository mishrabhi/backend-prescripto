const express = require("express");
const addDoctor = require("../controllers/adminController");
const upload = require("../middlewares/multer");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor);

module.exports = adminRouter;
