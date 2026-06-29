// require mongoose
const mongoose = require('mongoose');

// require dns to set custom DNS servers
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error)
    }
}

// export connectDB
module.exports = connectDB;