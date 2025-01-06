const jwt = require("jsonwebtoken");

//Admin Authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    //check token
    console.log(req.headers);
    const { atoken } = req.headers;
    if (!atoken) {
      res.json({ success: false, message: "Not authorized" });
    }

    //decode token
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    //match token with email and pass
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      res.json({ success: false, message: "Not authorized" });
    }
    //call next
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = authAdmin;
