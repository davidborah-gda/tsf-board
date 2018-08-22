const sequelize = require('../db');
const { DataTypes } = require('sequelize');
// const Metric = require('../models/metric');
// const Event = require('../models/event');


const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      defaultValue: null },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null },
    preferences: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    otherSuccess: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    defaultValue: null }
  });

  // User.hasMany(Metric);
  // User.belongsToMany(Event);

  module.exports = User;