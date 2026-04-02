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
    <title>DevOps Monitoring Dashboard</title>
    <style>
      body {
        margin: 0;
        font-family: Arial;
        background: #0f172a;
        color: white;
      }
      .container {
        padding: 20px;
      }
      h1 {
        text-align: center;
        color: #22c55e;
      }
      .cards {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
      }
      .card {
        background: #1e293b;
        padding: 20px;
        border-radius: 12px;
        width: 25%;
        text-align: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .value {
        font-size: 28px;
        margin-top: 10px;
        color: #38bdf8;
      }
      .status {
        color: #22c55e;
        font-weight: bold;
      }
      .footer {
        margin-top: 40px;
        text-align: center;
        color: #94a3b8;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>🚀 DevOps Capstone Monitoring Dashboard</h1>

      <div class="cards">
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
        <p>Version: v1.0.0</p>
        <p>Deployed via GitHub Actions + Kubernetes + Docker</p>
      </div>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
