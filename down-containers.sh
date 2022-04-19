#! /bin/bash

docker-compose down

cd laravel
docker-compose down

cd ../node
docker-compose down