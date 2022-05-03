const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

let xthings = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'my_index.html'));
})

app.get('/api/xthings', (request, response) => {
  response.json(xthings);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
