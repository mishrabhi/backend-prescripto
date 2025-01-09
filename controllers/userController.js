const validator = require("validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

//Api to register new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
      res.json({ success: false, message: "Missing Details" });
    }

    //Validate email
    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "Enter valid email" });
    }

    //Validate password
    if (password.length < 4) {
      res.json({
        success: false,
        message: "Password length should be greater than 4",
      });
    }

    //Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user data
    const userData = { name, email, password: hashedPassword };
    //save user to db
    const newUser = new userModel(userData);
    const user = await newUser.save();

    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //find user in db
    const user = await userModel.findOne({ email });

    if (!user) {
      res.json({ success: false, message: "User does not exist" });
    }

    //match password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      //generate token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser };
