const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Define the Person schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
    }

});


const User = mongoose.model('User', userSchema);
module.exports = User;