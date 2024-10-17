const adminMiddleware = async (req, res, next) => {
    try {
      // Log the user information
      console.log(req.user);
  
      // Check if the user has an admin role
      const adminRole = req.user.isAdmin;
      if (!adminRole) {
        return res.status(403).json({
          error: "Access denied. User is not an admin."
        });
      }
  
      // If user is admin, proceed
    //   res.status(200).json({ msg: req.user.isAdmin });
      // Call next middleware or route handler if needed
      next();
  
    } catch (error) {
      // Pass error to the error-handling middleware
      next(error);
    }
  };
  
  module.exports = adminMiddleware;
  