#!/bin/bash

cd /deploy/officemanager-front
rm -rf /var/wwww/OfficeManager/officemanager-app/*
cp -r dist/* /var/www/OfficeManager/officemanager-app/
systemctl restart apache2

