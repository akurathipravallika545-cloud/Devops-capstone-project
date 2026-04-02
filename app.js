const express = require('express');
const os = require('os');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const cpu = Math.floor(Math.random() * 100);
  const memory = Math.floor(Math.random() * 100);

  res.send(`
  <html>
  <head>
    <title>DevOps Monitoring</title>
    <style>
      body {
        margin: 0;
        font-family: Arial;
        background: #0f172a;
        color: white;
      }
      h1 {
        text-align: center;
        color: #22c55e;
      }
      .container {
        padding: 20px;
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
      .circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 6px solid #38bdf8;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        font-size: 20px;
      }
      .status {
        color: #22c55e;
        font-weight: bold;
      }
      .pipeline {
        margin-top: 40px;
        display: flex;
        justify-content: space-around;
      }
      .step {
        background: #1e293b;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        width: 20%;
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
      <h1>🚀 DevOps Monitoring Dashboard</h1>

      <div class="cards">
        <div class="card">
          <h3>CPU Usage</h3>
          <div class="circle">${cpu}%</div>
        </div>

        <div class="card">
          <h3>Memory Usage</h3>
          <div class="circle">${memory}%</div>
        </div>

        <div class="card">
          <h3>Pod Status</h3>
          <div class="status">Running</div>
        </div>
      </div>

      <div class="pipeline">
        <div class="step">✅ Code Push</div>
        <div class="step">✅ Build</div>
        <div class="step">✅ Docker</div>
        <div class="step">✅ Deploy</div>
      </div>

      <div class="footer">
        <p>Host: ${os.hostname()}</p>
        <p>Version: v2.0</p>
        <p>CI/CD: GitHub Actions + Kubernetes + Docker</p>
      </div>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
