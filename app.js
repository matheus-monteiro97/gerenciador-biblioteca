const express = require('express');
const app = express();
const UserController = require('./controller/userController');
const bookController = require('./controller/bookController');
const loginController = require('./controller/loginController');
const bodyParser = require('body-parser');
app.use(bodyParser.json);

// app.get('/', function (req, res) {
//   res.sendFile(`${__dirname}/view/home.html`);
// })

//CRUD USUÁRIOS
app.post('/users', UserController.create);
app.get('/users', UserController.getAll);
app.get('/users/id', UserController.getByPk);
app.put('/users/id', UserController.updateByPk);
app.delete('/users/id', UserController.deleteByPk);

// app.post('/users', UserController.create);
// app.get('/users', UserController.getAll);
// app.get('/users/:email', UserController.getByPk);
// app.put('/users/:email', UserController.updateByPk);
// app.delete('/users/:email', UserController.deleteByPk);

// CRUD LIVROS
app.post('/books', bookController.create);
app.get('/books', bookController.getAll);
app.get('/books/id', bookController.getByPk);
app.put('books/id', bookController.updateByPk);
app.delete('/books/id', bookController.deleteByPk);

// LOGIN
app.post('/login', loginController);

app.listen(3000, () => {
  console.log(`Server running on port`);
});