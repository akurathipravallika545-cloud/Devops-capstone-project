#!/bin/bash

DATE=$(date +%F)
BACKUP_DIR="/backup/$DATE"

mkdir -p $BACKUP_DIR

echo "Starting Kubernetes backup..."

kubectl get all --all-namespaces -o yaml > $BACKUP_DIR/k8s-resources.yaml

echo "Backup completed at $BACKUP_DIR"
