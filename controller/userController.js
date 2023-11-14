const User = require('../model/userModel');

(async () => {

    const database = require('./dbConnection');
    const User = require('../model/userModel');
    await database.sync();

})();