#!/bin/bash

cd /deploy/officemanager-front
docker-compose down --rmi all --remove-orphans
docker-compose up -d --build
echo "Build success"
