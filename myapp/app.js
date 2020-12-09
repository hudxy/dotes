
const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser")

const port = 3000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });   

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
