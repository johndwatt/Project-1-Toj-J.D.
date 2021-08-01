require("../configuration/db.connection");

module.exports = {
    User: require("./User"),    
    Assignment: require("./Assignment"),
    Submission: require("./Submission"),
};