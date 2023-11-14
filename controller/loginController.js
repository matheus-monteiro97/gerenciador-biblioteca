const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/userModel');



  const database = require('./dbConnection');
  database.sync();

const loginController = express.Router();

loginController.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Encontrar usuário com o email fornecido
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Email inválido' });
    }

    // Verificar a senha
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    // Se as credenciais estiverem corretas, envie uma resposta de sucesso
    res.json({ success: true, message: 'Login bem-sucedido' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = loginController;