const Sequelize = require('sequelize');
const database = require('../config/dbConnection');
const User = require('./userModel');

const Book = database.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publishCompany: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    own: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    userId: { // Chave estrangeira referente ao usuário
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
});

Book.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = Book;
