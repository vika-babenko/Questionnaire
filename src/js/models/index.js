const connection = require("../connection");
const Sequelize = require("sequelize");
const User = require("./user").User;
const Respondent = require("./respondent").Respondent;

module.exports ={
    User,
    Respondent
};