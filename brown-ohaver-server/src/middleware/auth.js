const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../apiResponse");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send(successResponse(token, "Access denied. Not authorized...", false));
  try {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(401).send(errorResponse(ex.message, "Invalid auth token...", false));
  }
}

module.exports = auth;