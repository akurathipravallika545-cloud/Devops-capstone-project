const express = require('express');
const app = express();

const PORT = 3000;

// VERY IMPORTANT: 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('🚀 DevOps Capstone Project Running');
});
