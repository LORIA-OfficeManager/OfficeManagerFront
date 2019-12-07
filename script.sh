#!/bin/bash

cd /deploy/officemanager-front
yarn install
ng build --prod
rm -rf /var/wwww/OfficeManager/officemanager-app/*
cp -r dist/* /var/www/OfficeManager/officemanager-app/
systemctl restart apache2

