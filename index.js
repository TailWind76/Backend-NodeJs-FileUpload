// Import the required modules
const express = require('express');
const multer = require('multer');

// Create an instance of Express
const app = express();

// Set up the storage for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where the file will be stored
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer middleware
const upload = multer({ storage: storage });

// Define the route to handle the file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // File has been uploaded successfully
  res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
