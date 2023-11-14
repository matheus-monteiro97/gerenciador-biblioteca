const express = require('express')
const app = express()
const UserController = require('./controller/userController')

// app.get('/', function (req, res) {
//   res.sendFile(`${__dirname}/view/home.html`);
// })

//CRUD USUÁRIOS
app.post('/users', UserController.create);
app.get('/users', UserController.getAll);
app.get('/users/:email', UserController.getEmail);
app.put('/users/:email', UserController.updateEmail);
app.delete('/users/:email', UserController.deleteEmail);

app.listen(3000, () => {
  console.log(`Server running on port`);
});