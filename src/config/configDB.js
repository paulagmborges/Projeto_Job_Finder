const { Sequelize } = require('sequelize');
const { resolve } = require('path');

const dbPath = resolve('src', 'db', 'app.db'); 

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: false, 
});
module.exports = sequelize;

