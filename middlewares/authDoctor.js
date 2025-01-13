const jwt = require("jsonwebtoken");

//Doctor Authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    //check token
    const { dtoken } = req.headers;
    if (!dtoken) {
      res.json({ success: false, message: "Not authorized" });
    }

    //decode token
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

    //get user id from token
    req.body.docId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = authDoctor;
