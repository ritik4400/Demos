import dotenv from "dotenv";
import connectDB from "./DB/db.js"; // Make sure the correct file and extension are specified

// Load environment variables
dotenv.config({
    path: './.env' // Double-check that the file is named `.env`
});

// Connect to the database
connectDB();

// mongoose connection logic in db.js file
