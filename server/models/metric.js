const sequelize = require('../db');
const { DataTypes } = require('sequelize');
//const User = require('../models/user');

const Metric = sequelize.define('Metric', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null },
    count: {
      type: DataTypes.INTEGER,
      isInt: true,
      allowNull: true,
      defaultValue: null },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      defaultValue: null },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null }
  });

//Metric.belongsTo(User);

  module.exports = Metric;