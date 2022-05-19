const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true
    },
    contactNo: {
        type:String, 
        required:true
    },
    NIC: {
        type:String, 
        required:true
    },
    homeCity: {
        type:String, 
        required:true
    },
    
});

const Customer = mongoose.model('customer', CustomerSchema);
module.exports = Customer;