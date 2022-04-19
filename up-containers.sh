#! /bin/bash

docker-compose up -d

cd laravel
docker-compose up -d

cd ../node
docker-compose up -d
docker-compose exec -T node node index.js &