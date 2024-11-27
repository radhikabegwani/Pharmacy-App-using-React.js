import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/medications', (req, res) => {
  // This would eventually fetch from a database
  res.json([{ id: 1, name: 'Aspirin' }, { id: 2, name: 'Ibuprofen' }]);
});

app.post('/order', (req, res) => {
  const orderData = req.body;
  // Process the order here
  res.status(201).json({ message: 'Order placed successfully', order: orderData });
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Authentication logic here
  res.json({ message: 'Login successful' });
});

app.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  // Registration logic here
  res.status(201).json({ message: 'User registered successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});