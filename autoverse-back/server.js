// require express
const express = require('express');

// create an instance of express
const app = express();

// body parser middleware
app.use(express.json());

// dotenv config
require('dotenv').config();

// define PORT
const PORT = process.env.PORT || process.env.PORT2

// listen on PORT
app.listen(PORT, (error) => {
    error ? console.log(error)
    : console.log(`Server is running on http://localhost:${PORT}`)
})

// define route test
app.get("/", (req, res) => {
    res.send("API is working")
})

// connect to MongoDB
const connectDB = require("./config/connectDB")
connectDB()

// import car routes
app.use("/api/cars", require("./routes/carRoutes"))

// import auth routes
app.use("/api/auth", require("./routes/authRoutes"))