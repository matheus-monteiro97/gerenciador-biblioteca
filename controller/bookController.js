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
                const userId = req.params.userId;
                const newBook = await Book.create({ title, author, genre, publishCompany, comment, own, userId});
    
                return res.status(201).json(newBook);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error creating book' });
            }
        },
    
        // Pegar todos os livros associados ao UserID
        getAll: async (req, res) => {
            try {
                const userId = req.params.userId;
    
                const books = await Book.findAll({ where: { userId } });
                return res.status(200).json(books);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error getting books' });
            }
        },

        getByPk: async (req, res) => {
            try {
                const { idBook } = req.params;
                const userId = req.params.userId;
        
                const book = await Book.findByPk(idBook, { where: { userId } });
        
                if (!book) {
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

            const userId = req.params.userId;

            const book = await Book.findByPk(idBook, { where: { userId } });

            if (!book) {
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

            const userId = req.params.userId;

            const book = await Book.findByPk(idBook, { where: { userId } });

            if (!book) {
                return res.status  (404).json({ error: 'Book not found or unauthorized' });
            }

            await book.destroy();
            return res.status(204).json();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error deleting book' });
        }
    },

};

module.exports = bookController;