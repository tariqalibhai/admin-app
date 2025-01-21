const mongoose = require("mongoose");

const URI = process.env.MONGOURI;

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("seccesfully connected")
    } catch (error) {
        console.error("Database is failed")
        process.exit(0);
    }
}
module.exports =  connectDb;
