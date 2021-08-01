const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: [true, "You must provide your name to submit your assignment"],
        },
        submissionDate: new Date,
        file: {
            type: String,
            required: [true, "You must add a file with your work to submit your assignment"],   
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        assignmentId: {
            type: mongoose.Types.ObjectId,
            ref: "Assignment",
        },
    },
    {
        timestamps: true,
    }
);

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;
