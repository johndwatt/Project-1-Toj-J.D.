const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Your name is required to sign up"],
        },
        email: {
            type: String,
            required: [true, "An email is required to sign up"],
            unique: [true, "There is already an account associated with this email"],
        },
        image: {
            type: String,
            default: "",
        },
        password: {
            type: String,
            required: [true, "A password is required to sign up"],   
        },
        instructor: Boolean,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;