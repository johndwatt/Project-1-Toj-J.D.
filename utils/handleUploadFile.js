const buckectS3 = require('../configuration/aws.connection'); 
const fs = require('fs');
const util = require('util');
const removeFile = util.promisify(fs.unlink)

const { Submission, Assignment } = require("../models");

const handleUploadFile = async (req, res, next) => {
  try {
    const file = req.file;
   
    const validType = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "image/gif", "image/jpeg", "image/png", "application/vnd.ms-excel.sheet.macroEnabled.12"];

    if (validType.includes(file.mimetype)) {
        const result = await buckectS3.uploadFile(file);
        await removeFile(file.path);
        req.body.file = result.Location;

        next();
    } else {
        const error = new Error();
        error.message = "invalid file type"
        throw error;
    }
  } catch (error) {
    await removeFile(req.file.path);  
    const allAssignments = await Assignment.find({});
    const context = {
      error, 
      assignments: allAssignments,
    };

    return res.render("submissions/new", context);
  }
}

module.exports = handleUploadFile;