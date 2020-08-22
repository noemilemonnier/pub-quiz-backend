const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.team = require("./team.model.js")(mongoose);
db.question = require("./question.model")(mongoose);

module.exports = db;