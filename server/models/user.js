const mongoose = require("mongoose");
const brypt = require("bcrypt");
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// static signup method
userSchema.statics.signup = async function (userName, password) {

    //validation
    if(!userName || !password) {
        throw Error('All fields must be filled')
    }
    if(validator.isEmail(userName)){
        throw Error("Please don't use email!")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough!")
    }

    const exists = await this.findOne({ userName });

    if (exists) {
        throw Error("Username already in use");
    }

    //constructs salt for password
    const salt = await brypt.genSalt(10);
    //hashes password for security
    const hash = await brypt.hash(password, salt);
    //create user in db
    const user = await this.create({ userName, password: hash });

    return user;
};

module.exports = mongoose.model("User", userSchema);
