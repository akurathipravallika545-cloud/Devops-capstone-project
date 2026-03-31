const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>DevOps Dashboard</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: white;
        text-align: center;
      }

      h1 {
        margin-top: 30px;
        font-size: 40px;
      }

      .container {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;
        flex-wrap: wrap;
      }

      .card {
        background: rgba(255,255,255,0.1);
        padding: 20px;
        width: 250px;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        transition: 0.3s;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .card img {
        width: 60px;
        margin-bottom: 10px;
      }

      .footer {
        margin-top: 50px;
        font-size: 14px;
        opacity: 0.8;
      }
    </style>
  </head>

  <body>

    <h1>🚀 DevOps Capstone Project</h1>
    <p>CI/CD Pipeline with Monitoring on AWS</p>

    <div class="container">

      <div class="card">
        <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png"/>
        <h3>Docker</h3>
        <p>Containerized Application</p>
      </div>

      <div class="card">
        <img src="https://cdn-icons-png.flaticon.com/512/919/919837.png"/>
        <h3>Kubernetes</h3>
        <p>Deployed on EKS</p>
      </div>

      <div class="card">
        <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png"/>
        <h3>CI/CD</h3>
        <p>GitHub Actions Pipeline</p>
      </div>

      <div class="card">
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"/>
        <h3>Monitoring</h3>
        <p>Prometheus + Grafana</p>
      </div>

    </div>

    <div class="footer">
      <p>Deployed on AWS | Built by Pravallika 💙</p>
    </div>

  </body>
  </html>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
