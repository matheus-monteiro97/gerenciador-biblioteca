const Sequelize = require('sequelize');
const database = require('./dbConnection');
const User = require('./userTable');

const ShoppingList = database.define('shoppingList', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    title: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    linkShop: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

//Relacionamento do UserID com o link de compra do livro
ShoppingList.belongsTo(User, {
    constraint: true,
    foreignKey: 'userId' //nome da coluna que vai receber a chave estrangeira
});


module.exports = ShoppingList;