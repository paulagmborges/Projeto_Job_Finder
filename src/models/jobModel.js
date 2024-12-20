
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection'); 

const JobModel = sequelize.define('Job', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: true
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    new_job: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
});
module.exports = JobModel;


