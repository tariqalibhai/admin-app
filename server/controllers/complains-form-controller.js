const Complain = require("../models/complain-model");

// Function to handle form submission
const complainsForm = async (req, res) => {
  const { username, email, message } = req.body;
  const imagePath = req.file ? req.file.path : null; // Get the uploaded image path

  if (!username || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save the complaint in the database
    const complaint = new Complain({
      username,
      email,
      message,
      imagePath,
    });

    await complaint.save();
    res.status(200).json({ success: "Complaint submitted successfully" });
  } catch (err) {
    console.error("Error saving complaint:", err);
    res.status(500).json({ error: "Error occurred while submitting the complaint" });
  }
};

module.exports = { complainsForm };
