const sequelize = require('../db');
const { DataTypes } = require('sequelize');
//const Metric = require('../models/metric');


const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null },
    time: {
      type: DataTypes.INTEGER,
      isInt: true,
      allowNull: true,
      defaultValue: null },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null }
  });

  module.exports = Event;