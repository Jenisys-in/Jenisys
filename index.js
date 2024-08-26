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
const contactData = mongoose.Schema({
    name: String,
    email: String,
    message: String
}, { timestamps: true });

const contactModel = mongoose.model("Contact", contactData);

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

// Function to create and save a contact
async function createAndSavePerson() {
    try {
        const janeFonda = new contactModel({
            name: "John Doe",
            email: "john.doe@example.com",
            message: "Hello World!"
        });

        const data = await janeFonda.save();
        console.log('Saved contact:', data);
    } catch (err) {
        console.error('Error saving contact:', err);
    }
}

// Uncaught Exception and Unhandled Rejection handlers
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err.message);
});
