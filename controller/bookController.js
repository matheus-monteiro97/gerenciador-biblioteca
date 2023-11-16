const Book = require('../model/bookModel');
const User = require ('../model/userModel')

const database = require('../config/dbConnection');
database.sync();

const bookController = {
        // Criação de livros
        create: async (req, res) => {
            try {
                const { title , author, genre, publishCompany, comment, own } = req.body;
                
                // Adiciona o UserID associado ao livro
                const userID = req.body.userID; // Certifique-se de enviar o userID junto com a requisição
                const newBook = await Book.create({ title, author, genre, publishCompany, comment, own, userID });
    
                return res.status(201).json(newBook);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error creating book' });
            }
        },
    
        // Pegar todos os livros associados ao UserID
        getAll: async (req, res) => {
            try {
                // Obtém o userID do objeto de usuário autenticado (se aplicável)
                const userID = req.user ? req.user.id : null;
    
                const books = await Book.findAll({ where: { userID } });
                return res.status(200).json(books);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error getting books' });
            }
        },

    getByPk: async (req, res) => {
        try {
            const { idBook } = req.params;

            // Obtém o userID do objeto de usuário autenticado (se aplicável)
            const userID = req.user ? req.user.id : null;

            const book = await Book.findByPk(idBook);

            if (!book || (userID && book.userID !== userID)) {
                return res.status(404).json({ error: 'Book not found' });
            }

            return res.status(200).json(book);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error getting book' });
        }
    },

    updateByPk: async (req, res) => {
        try {
            const { idBook } = req.params;
            const { title, author, genre, publishCompany, comment, own } = req.body;

            // Obtém o userID do objeto de usuário autenticado (se aplicável)
            const userID = req.user ? req.user.id : null;

            const book = await Book.findByPk(idBook);

            if (!book || (userID && book.userID !== userID)) {
                return res.status(404).json({ error: 'Book not found or unauthorized' });
            }

            await book.update({ title, author, genre, publishCompany, comment, own });
            return res.status(200).json(book);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error updating book' });
        }
    },
    
    deleteByPk: async (req, res) => {
        try {
            const { idBook } = req.params;

            // Obtém o userID do objeto de usuário autenticado (se aplicável)
            const userID = req.user ? req.user.id : null;

            const book = await Book.findByPk(idBook);

            if (!book || (userID && book.userID !== userID)) {
                return res.status  (404).json({ error: 'Book not found or unauthorized' });
            }

            await book.destroy();
            return res.status(204).json();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error deleting book' });
        }
    },

    // ... Outras funções
};

module.exports = bookController;

// const Book = require('../model/bookModel');

//     const database = require('../config/dbConnection');
//     database.sync();

//     const bookController = {

//         // Criação de livros
//         create: async (req, res) => {
//             try {
//                 const { title , author, genre, publishCompany, comment, own } = req.body;
//                 const newBook = await Book.create({ title, author, genre, publishCompany, comment, own });
//                 return res.status(201).json(newBook);
//             } catch (error) {
//                 return res.status(500).json({ error: 'Error creating book' });
//             }
//         },

//         // Pegar todos os livros
//         getAll: async (req, res) => {
//             try {
//                 const books = await Book.findAll();
//                 return res.status(200).json(books);
//             } catch (error) {
//                 return res.status(500).json({ error: 'Error getting books' });
//             }
//         },

//         getByPk: async (req, res) => {
//             try {
//                 const { idBook } = req.params;
//                 const book = await Book.findByPk(idBook);
                
//                 if (!book) {
//                     return res.status(404).json({ error: 'Book not found' });
//                 }
        
//                 return res.status(200).json(book);
//             } catch (error) {
//                 return res.status(500).json({ error: 'Error getting book' });
//             }
//         },

//         updateByPk: async (req, res) => {
//             try {
//                 const { idBook } = req.params;
//                 const { title , author, genre, publishCompany, comment, own } = req.body;
    
//                 const book = await Book.findByPk(idBook);
//                 if (!book) {
//                     return res.status(404).json({ error: 'User not found' });
//                 }
    
//                 await book.update({ title , author, genre, publishCompany, comment, own });
//                 return res.status(200).json(book);
//             } catch (error) {
//                 return res.status(500).json({ error: 'Error updating user' });
//             }
//         },
        
//         deleteByPk: async (req, res) => {
//             try {
//                 const { idBook } = req.params;
//                 const book = await Book.findByPk(idBook);

//                 if (!book) {
//                     return res.status(404).json({ error: 'Book not found' });
//                 }
//                 await book.destroy();
//                 return res.status(204).json();
//             } catch (error) {
//                 return res.status(500).json({ error: 'Error deleting book' });
//             }
//         }

//     };

//     module.exports = bookController;