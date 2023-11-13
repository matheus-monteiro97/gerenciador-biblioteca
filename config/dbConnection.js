const Sequelize = require('sequelize');

//Configurações para conexão com o Banco de dados
const sequelize = new Sequelize('librarymanager', 'luiz', '0601', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
});

module.exports = sequelize;
