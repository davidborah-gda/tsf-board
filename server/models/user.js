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
      allowNull: false,
      defaultValue: null },
    calls: {
      type: DataTypes.STRING,
      allowNull: false,
    defaultValue: null },
    DM_name: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    DM_email: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    meetings: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
      proposals: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    sales: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    social: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    defaultValue: null },
    Rename_other: {
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