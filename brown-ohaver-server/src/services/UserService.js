const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const Joi = require("joi");

exports.authUser = async(bodyData) => {
  try {
    let user = await User.findOne({ email: bodyData.email });
    if (!user) return "Invalid email or password...";

    const validPassword = await bcrypt.compare(
      bodyData.password,
      user.password
    );
    if (!validPassword)
      return "Invalid email or password...";

    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token =  jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtSecretKey
    );

    user._doc.token = token
    return user;
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};
