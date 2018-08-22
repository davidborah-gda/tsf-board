const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:./main.db');

module.exports = sequelize;
