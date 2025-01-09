const jwt = require("jsonwebtoken");

//User Authentication middleware
const authUser = async (req, res, next) => {
  try {
    //check token
    const { token } = req.headers;
    if (!token) {
      res.json({ success: false, message: "Not authorized" });
    }

    //decode token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    //get user id from token
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = authUser;
