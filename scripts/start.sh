#!/bin/bash
chmod +x /home/ec2-user/app/scripts/start.sh
cd /home/ec2-user/app
npm install
nohup node app.js > output.log 2>&1 &
