const express = require('express');
const app = express();
const UserController = require('./controller/userController');
const bookController = require('./controller/bookController');
const loginController = require('./controller/loginController');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   res.sendFile(`${__dirname}/view/home.html`);
// })

//CRUD USUÁRIOS
app.post('/users', UserController.create);
app.get('/users', UserController.getAll);
app.get('/users/:id', UserController.getByPk);
app.put('/users/:id', UserController.updateByPk);
app.delete('/users/:id', UserController.deleteByPk);

// LOGIN
app.post('/login', loginController.login);

// CRUD LIVROS
app.post('/id/books', bookController.create);
app.get('/books/:userID', bookController.getAll);
app.get('/books/:userID/:idBook', bookController.getByPk);
app.put('/books/:userID/:idBook', bookController.updateByPk);
app.delete('/books/:userID/:idBook', bookController.deleteByPk);

app.listen(3000, () => {
  console.log(`Server running on port`);
});