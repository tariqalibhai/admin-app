const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, Token not provided" });
  }

  // Remove 'Bearer ' prefix from the token
  const jwtToken = token.replace("Bearer ", "").trim();
  console.log("Extracted Token:", jwtToken);

  try {
    // Verify the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("Token Verified Payload:", isVerified);

    // Retrieve the user based on the token payload
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0, // Exclude the password field
    });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach token and user details to the request
    req.token = jwtToken;
    req.user = userData;
    req.userID = userData._id; // Corrected this line

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error during token verification:", error); // Log the error for debugging
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
