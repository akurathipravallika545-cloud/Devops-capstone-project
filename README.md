# 🚀 DevOps Capstone Project – End-to-End CI/CD with Monitoring

## 📌 Project Summary

This project demonstrates a complete **DevOps lifecycle**:

* Infrastructure provisioning using **Terraform**
* CI/CD automation using **GitHub Actions**
* Containerization using **Docker**
* Deployment on **AWS EKS (Kubernetes)**
* Monitoring using **Prometheus & Grafana**
* Custom **Monitoring Dashboard UI**

---

# 🏗️ Architecture Diagram

```
        Developer (GitHub Push)
                │
                ▼
        GitHub Actions (CI/CD)
                │
        ┌───────┴────────┐
        ▼                ▼
   Docker Build     AWS Credentials
        │
        ▼
   AWS ECR (Image Repo)
        │
        ▼
   Kubernetes (EKS Cluster)
        │
   ┌────┴───────────┐
   ▼                ▼
Deployment       Service (LB)
   │                │
   ▼                ▼
 Pods         External IP (App)
   │
   ▼
Monitoring Stack
(Prometheus + Grafana)
```

---

# 📅 Day 1: Infrastructure Setup using Terraform

### ✅ Tasks

* Installed Terraform
* Created AWS infrastructure using Terraform
* Provisioned:

  * VPC
  * Subnets
  * Security Groups
  * EKS Cluster

### 💻 Commands

```bash
terraform init
terraform validate
terraform plan
terraform apply
```

---

## 📘 Terraform Code Explanation

### 🔹 Provider Configuration

```hcl
provider "aws" {
  region = "ap-south-1"
}
```

👉 Defines AWS region for resource creation

---

### 🔹 VPC Creation

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}
```

👉 Creates isolated network for EKS cluster

---

### 🔹 Subnets

```hcl
resource "aws_subnet" "public" {
  vpc_id = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}
```

👉 Required for LoadBalancer & EKS nodes

---

### 🔹 EKS Cluster

```hcl
resource "aws_eks_cluster" "eks" {
  name = "devops-cluster"
}
```

👉 Creates Kubernetes control plane

---

### 🔹 Node Group

```hcl
resource "aws_eks_node_group" "nodes" {
  cluster_name = aws_eks_cluster.eks.name
}
```

👉 Worker nodes where pods run

---

# 📅 Day 2: Node.js Application Setup

### ✅ Tasks

* Built Monitoring Dashboard UI
* Added CPU, Memory, Pod status

```bash
npm init -y
npm install express
node app.js
```

---

# 📅 Day 3: Docker Setup

```bash
docker build -t devops-app .
docker run -p 3000:3000 devops-app
```

---

# 📅 Day 4: GitHub Integration

```bash
git init
git add .
git commit -m "initial commit"
git push -u origin master
```

---

# 📅 Day 5: CI/CD with GitHub Actions

### 🔄 Pipeline Flow

* Code push triggers workflow
* Build Docker image
* Push to ECR
* Deploy to EKS

---

# 📅 Day 6: AWS ECR Setup

```bash
aws ecr get-login-password --region ap-south-1 | \
docker login --username AWS --password-stdin <ECR-URL>

docker tag devops-app:latest <ECR-URL>:latest
docker push <ECR-URL>:latest
```

---

# 📅 Day 7: Kubernetes Deployment

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
```

---

# 📅 Day 8: Monitoring Setup (Prometheus + Grafana)

### ✅ Tasks

* Installed Prometheus in Kubernetes
* Configured scraping metrics
* Installed Grafana
* Connected Grafana with Prometheus
* Created dashboards

### 💻 Commands

```bash
kubectl create namespace monitoring

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring
```

---

# 📅 Day 9: Debugging & Fixes

```bash
git pull origin master --rebase
git reset --hard origin/master

kubectl rollout restart deployment devops-app
kubectl delete pods -l app=devops-app
```

---

# 📅 Day 10: UI Upgrade (F-Style Monitoring Dashboard)

* Added:

  * Circle metrics
  * Pipeline stages
  * Advanced UI design

```bash
git commit -m "upgraded UI"
git push origin master
```

---

# 📅 Day 11: Final Deployment

```bash
kubectl get svc
kubectl rollout status deployment devops-app
```

---

# 🎯 Final Output

* 🌐 Live app on AWS EKS
* 🎨 Monitoring Dashboard UI
* 📊 Prometheus metrics collection
* 📈 Grafana visualization
* 🔄 CI/CD automation
* 🏗️ Infrastructure via Terraform

---

# 🧠 Key Learnings

* Infrastructure as Code (Terraform)
* Kubernetes production deployment
* CI/CD automation
* Monitoring & observability
* Real-world debugging skills

---

# 🚀 Future Enhancements

* 🔐 HTTPS with domain
* 📊 Advanced Grafana dashboards
* ⚡ Auto-scaling with HPA

---

# 👩‍💻 Author

**Pravallika Akurathi**

---

⭐ This project demonstrates **end-to-end DevOps expertise (Beginner → Advanced → Production Ready)**.

