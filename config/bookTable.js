const Sequelize = require('sequelize');
const database = require('./dbConnection');
const User = require('./userTable');

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
    comment : {
        type: Sequelize.TEXT,
        allowNull: true
    }

    
}); 
//Relacionamento do UserID com o livro
Book.belongsTo(User, {
    constraint: true,
    foreignKey: 'userId' //nome da coluna que vai receber a chave estrangeira
});

module.exports = Book;