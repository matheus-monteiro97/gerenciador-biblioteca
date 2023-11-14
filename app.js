const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/view/home.html`);
})

app.listen(3000, () => {
  console.log(`Server running on port`);
});