const buckectS3 = require('../config/aws.connection'); 
const fs = require('fs');
const util = require('util');
const removeFile = util.promisify(fs.unlink)

const handleUploadFile = async (req, res, next) => {
  try {
    const file = req.file;
    const result = await buckectS3.uploadFile(file);
    await removeFile(file.path);
    req.body.image = result.Location;

    next();
  } catch (error) {
    const context = {
      error,
    };

    return res.render("submissions/new", context);
  }
}

module.exports = handleUploadFile;