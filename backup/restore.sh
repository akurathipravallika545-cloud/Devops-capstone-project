#!/bin/bash

FILE=$1

if [ -z "$FILE" ]; then
  echo "Please provide backup file"
  exit 1
fi

echo "Restoring Kubernetes resources..."

kubectl apply -f $FILE

echo "Restore completed"
