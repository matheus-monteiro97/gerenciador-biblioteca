const User = require('../model/userModel');

(async () => {

    const database = require('./dbConnection');
    await database.sync();

    const UserController = {
        // Criação de usuários
        create: async (req, res) => {
            try {
                const { name, email, password } = req.body;
                const newUser = await User.create({ name, email, password });
                return res.status(201).json(newUser);
            } catch (error) {
                return res.status(500).json({ error: 'Error creating user' });
            }
        },
    
        // Pegar usuários
        getAll: async (req, res) => {
            try {
                const users = await User.findAll();
                return res.status(200).json(users);
            } catch (error) {
                return res.status(500).json({ error: 'Error getting users' });
            }
        },
    
        // Pegar usuárioo usando email como parâmetro
        getEmail: async (req, res) => {
            try {
                const { email } = req.params;
                const User = await User.findOne({ where: { email } });
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                return res.status(200).json(user);
            } catch (error) {
                return res.status(500).json({ error: 'Error getting user' });
            }
        },
    
        // Atualizar usuário usando email como parâmetro
        updateEmail: async (req, res) => {
            try {
                const { id } = req.params;
                const { name, email, password } = req.body;
    
                const user = await User.findByPk(id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
    
                await user.update({ name, email, password });
                return res.status(200).json(user);
            } catch (error) {
                return res.status(500).json({ error: 'Error updating user' });
            }
        },
    
        // Deletar usuário usando email como parâmetro
        deleteEmail: async (req, res) => {
            try {
                const { email } = req.params;
                const User = await User.findOne({ where: { email } });
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
    
                await user.destroy();
                return res.status(204).json();
            } catch (error) {
                return res.status(500).json({ error: 'Error deleting user' });
            }
        }
    };

})();

module.exports = UserController;