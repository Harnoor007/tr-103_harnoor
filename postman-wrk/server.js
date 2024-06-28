const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Correctly resolve the path to the data.json file
const dataPath = path.join(__dirname, 'api', 'data.json');
const data = require(dataPath);

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
