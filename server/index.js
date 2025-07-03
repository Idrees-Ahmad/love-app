
const express = require('express');
const cors = require('cors');
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT  = process.env.PORT || 5000;

app.use(cors());

app.get('/love', (req, res) => {
  res.json({ message: 'I Love You my sweet wife ❤️ Forever!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
