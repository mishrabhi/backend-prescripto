const cloudinary = require("cloudinary").v2;

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

module.exports = connectCloudinary;
