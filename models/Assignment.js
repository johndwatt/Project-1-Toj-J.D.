const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must provide a name for your assignment"],
        },
        content: String,
        dueDate: {
            type: Date,
            required: [true, "You must assign a due date for your assignment"],
        },
        password: {
            type: String,
            required: [true, "A password is required to sign up"],   
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
