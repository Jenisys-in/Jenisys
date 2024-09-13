const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // Enable JSON parsing

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
}));

// Define the schema and model for contact data
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String
  }, { timestamps: true });

  let Contact;

  try {
    // Prevent model overwrite in development
    Contact = mongoose.model('Contact');
  } catch {
    Contact = mongoose.model('Contact', contactSchema);
  }

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;



mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to DB");

        // Call the function to create and save a person
        

        const PORT = process.env.PORT || 8081;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));

    




// Uncaught Exception and Unhandled Rejection handlers
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err.message);
});

app.post('/submit-form', async (req, res) => {
    try {
      const { name, email, number } = req.body;
      const contact = new Contact({ name, email, number });
      const savedContact = await contact.save();
      res.status(201).json(savedContact);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  });
  
  app.get('/', (req, res) => {
    res.send("Server is running");
  });