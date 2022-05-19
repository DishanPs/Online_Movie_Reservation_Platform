const mongoose = require("mongoose");
//to get packages and assign into variables.

const URI = "mongodb+srv://cdrc:Chamindu1999@online-movie-reservatio.etcxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected");
    
}


module.exports = {
  connectDB,
  serviceID: "VA6f9ece8f27aa826dad1f516c70fb2d32",
  accountSID: "AC3cb1cf2764f0c7c8ca7aaf489fa43845",
  authToken: "6053d145285a202a9b79023e48407760",
};