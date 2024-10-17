const Service = require("../models/services-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response || response.length === 0) {
      // Handle the case where no service is found
      return res.status(404).json({ msg: "No service found" });
    }

    // If services are found, return them
    return res.status(200).json({
      msg: "Services found",
      data: response
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.log("Error from the server:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = services;
