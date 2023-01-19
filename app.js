const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World This is Meghan!')
})

console.log('in the node console');

app.listen(3000, () => {
    console.log(`Server is running & listening on port 3000`);
  });