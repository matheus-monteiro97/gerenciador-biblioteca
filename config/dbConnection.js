const { Sequelize } = require('sequelize');

// Configurações para conexão com o banco de dados Supabase
const sequelize = new Sequelize('postgresql://postgres:d@atab@se123@db.rhbzdjnrtwhtlrqdnext.supabase.co:5432/postgres');

module.exports = sequelize;
