const User = require('../model/userModel');
const database = require('../config/dbConnection');
database.sync();

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ error: 'Email inválido' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ error: 'Senha inválida' });
      }
  
      res.json({ success: true, message: 'Login bem-sucedido' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

module.exports = loginController;