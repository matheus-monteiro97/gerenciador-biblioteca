const Sequelize = require('sequelize');
const database = require('../config/dbConnection');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false
    }
});

module.exports = User;