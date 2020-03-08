#!/bin/bash

cd /deploy/officemanager-front
rm -rf /var/wwww/office_manager/*
cp -r dist/* /var/www/office_manager/
systemctl restart apache2

