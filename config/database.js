const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'adm', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
