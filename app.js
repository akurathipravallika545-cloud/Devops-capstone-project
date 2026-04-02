const express = require('express');
const os = require('os');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const cpu = (Math.random() * 100).toFixed(0);
  const memory = (Math.random() * 100).toFixed(0);

  res.send(`
  <html>
  <head>
    <title>DevOps Monitoring</title>
    <style>
      body {
        margin: 0;
        font-family: Arial;
        background: linear-gradient(135deg, #0f172a, #1e3a8a);
        color: white;
        text-align: center;
      }

      h1 {
        margin-top: 30px;
        color: #22c55e;
      }

      .container {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 50px;
      }

      .card {
        background: linear-gradient(135deg, #1e293b, #334155);
        padding: 30px;
        border-radius: 15px;
        width: 250px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        transition: 0.3s;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .value {
        font-size: 30px;
        margin-top: 10px;
        color: #38bdf8;
      }

      .status {
        color: #22c55e;
        font-weight: bold;
      }

      .footer {
        margin-top: 50px;
        color: #cbd5f5;
      }
    </style>
  </head>

  <body>
    <h1>🚀 DevOps Capstone Monitoring Dashboard</h1>

    <div class="container">
      <div class="card">
        <h3>CPU Usage</h3>
        <div class="value">${cpu}%</div>
      </div>

      <div class="card">
        <h3>Memory Usage</h3>
        <div class="value">${memory}%</div>
      </div>

      <div class="card">
        <h3>Pod Status</h3>
        <div class="value status">Running</div>
      </div>
    </div>

    <div class="footer">
      <p>Host: ${os.hostname()}</p>
      <p>Version: v2.0.0</p>
      <p>Deployed via GitHub Actions + Kubernetes + Docker</p>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
