#!/bin/bash
# on our EC2 instance

echo "deploying"

docker stop adminpanel
docker rm adminpanel

docker pull michaelpeterswa/guwt-admin-panel

docker run -d -p 6970:5000 --name=adminpanel --restart=always michaelpeterswa/guwt-admin-panel
docker cp /home/ec2-user/backend_env_ap.txt adminpanel:/usr/src/app/.env
docker restart adminpanel