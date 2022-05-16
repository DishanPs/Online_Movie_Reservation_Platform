const mongoose = require("mongoose");
//to get packages and assign into variables.

const URI = "mongodb+srv://cdrc:Chamindu1999@online-movie-reservatio.etcxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected");
    
}


module.exports = connectDB;