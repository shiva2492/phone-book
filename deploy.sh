#!/bin/bash
docker build -t shivadwivedi/rest_api .
docker push shivadwivedi/rest_api

ssh deploy@$DEPLOY_SERVER << EOF
docker pull shivadwivedi/rest_api
docker stop rest-api || true
docker rm rest-api || true
docker rmi shivadwivedi/rest_api:current || true
docker tag shivadwivedi/rest_api:latest shivadwivedi/rest_api:current
docker run -d --restart always --name rest-api -p 3000:3000 shivadwivedi/rest_api:current
EOF
