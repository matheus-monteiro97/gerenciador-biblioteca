const Book = require('../model/bookModel');

    const database = require('./dbConnection');
    await database.sync();

    const bookController = {
        // Criação de livros
        create: async (req, res) => {
            try {
                const { title , author, genre, publishCompany, comment, own } = req.body;
                const newBook = await Book.create({ title, author, genre, publishCompany, comment, own });
                return res.status(201).json(newBook);
            } catch (error) {
                return res.status(500).json({ error: 'Error creating book' });
            }
        },

        // Pegar todos os livros
        getAll: async (req, res) => {
            try {
                const books = await Book.findAll();
                return res.status(200).json(books);
            } catch (error) {
                return res.status(500).json({ error: 'Error getting books' });
            }
        },

        getByPk: async (req, res) => {
            try {
                const { id } = req.params;
                const book = await Book.findByPk(id);
                
                if (!book) {
                    return res.status(404).json({ error: 'Book not found' });
                }
        
                return res.status(200).json(book);
            } catch (error) {
                return res.status(500).json({ error: 'Error getting book' });
            }
        },

        updateByPk: async (req, res) => {
            try {
                const { id } = req.params;
                const { title , author, genre, publishCompany, comment, own } = req.body;
    
                const book = await Book.findByPk(id);
                if (!book) {
                    return res.status(404).json({ error: 'User not found' });
                }

                if (book.userId !== userId) {
                    return res.status(403).json({ error: 'Unauthorized operation' });
                }
    
                await book.update({ title , author, genre, publishCompany, comment, own });
                return res.status(200).json(book);
            } catch (error) {
                return res.status(500).json({ error: 'Error updating user' });
            }
        },
        
        deleteByPk: async (req, res) => {
            try {
                const { id } = req.params;
                const book = await Book.findByPk(id);

                if (!book) {
                    return res.status(404).json({ error: 'Book not found' });
                }
                await book.destroy();
                return res.status(204).json();
            } catch (error) {
                return res.status(500).json({ error: 'Error deleting book' });
            }
        }

    };