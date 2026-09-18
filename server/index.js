import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory array storing your form submissions
const entries = [];

app.post('/api/entries', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newEntry = {
    _id: Date.now().toString(),
    name,
    email,
    message,
    createdAt: new Date().toLocaleString(),
  };

  entries.unshift(newEntry);
  console.log('✅ New Entry Saved:', newEntry);

  return res.status(201).json(newEntry);
});

app.get('/api/entries', (req, res) => {
  return res.json(entries);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
