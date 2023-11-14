const User = require('../model/userModel');
const Book = require('../model/bookModel');

(async () => {

    const database = require('./dbConnection');
    const User = require('../model/userModel');
    const Book = require('../model/bookModel');
    await database.sync();

    
})();