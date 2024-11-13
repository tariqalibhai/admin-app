const express = require("express");
const multer = require("multer");
const { complainsForm } = require("../controllers/complains-form-controller");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

const router = express.Router();

// POST route to handle complaint form submission with image upload
router.post("/complains", upload.single("image"), complainsForm);

module.exports = router;
