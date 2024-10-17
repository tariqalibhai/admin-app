const Contact = require("../models/contact-model");

const contactForm = async (req, resp) => {
  try {
    const response = req.body;
    console.log(response);  // just for checking the the data
    await Contact.create(response);
    return resp.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error occurred while sending message:", error); // Log the error details
    return resp.status(500).json({ message: "Message Not sent Successfully", error: error.message });
  }
}

module.exports = contactForm;
