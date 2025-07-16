const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'sql_bimqubator_c', 
  'sql_bimqubator_c', 
  '1443e1e3630e8',   
  {
    host: 'localhost', 
    dialect: 'mysql',
  }
);

module.exports = sequelize;
