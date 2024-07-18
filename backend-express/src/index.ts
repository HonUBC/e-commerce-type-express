import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3333;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../../dist')));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  console.log(`name::${name}`)
  console.log(`age::${age}`)
//   res.send(`Name: ${name}, Age: ${age}`);
  res.sendStatus(200)
});

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
