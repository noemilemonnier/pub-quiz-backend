/*
* This page is to set as Models the Team.model.js and Question.model.js files for the database's fields in MongoDB 
* author: @noemilemonnier
*/

const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.team = require("./team.model")(mongoose);
db.question = require("./question.model")(mongoose);
db.user = require("./user.model")(mongoose);



module.exports = db;