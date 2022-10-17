const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

//users schema
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
    //validation of input from user side
    if (!userName || !password) {
        throw Error("All fields must be filled");
    }
    if (validator.isEmail(userName)) {
        throw Error("Please don't use email!");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough!");
    }

    //check to see if username is already in use
    const exists = await this.findOne({ userName });
    if (exists) {
        throw Error("Username already in use");
    }

    //constructs salt for password
    const salt = await bcrypt.genSalt(10);
    //hashes password for security
    const hash = await bcrypt.hash(password, salt);
    //create user in db
    const user = await this.create({ userName, password: hash });

    return user;
};

//static login method

userSchema.statics.login = async function (userName, password) {
    //validation
    if (!userName || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ userName });
    //check to see if valid username
    if (!user) {
        throw Error("Incorrect username!");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect password!");
    }

    return user;
};

module.exports = mongoose.model("User", userSchema);
