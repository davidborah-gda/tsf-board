const sequelize = require('sequelize');
const User = require('./user');
const Event = require('./event');

const userEvent = sequelize.define('userEvent', {
  });

  User.belongsToMany(Event, { through: 'userEvent' });
  Event.belongsToMany(User, { through: 'userEvent' });

  module.exports = userEvent;