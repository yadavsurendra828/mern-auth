const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const Joi = require("joi");
const { successResponse, errorResponse } = require("../apiResponse");
const UserService = require("../services/UserService");

const login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    const userDetail = await UserService.authUser(req.body);

    return res.status(200).json(successResponse(userDetail, "Response"));
  } catch (err) {
    return res.status(400).json(errorResponse(err.message, "Response"));
  }
};

module.exports = {
  login,
};
