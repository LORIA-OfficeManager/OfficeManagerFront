#!/bin/bash

cd /deploy/officemanager-front
docker-compose down
docker-compose up -d --build
echo "Build success"
